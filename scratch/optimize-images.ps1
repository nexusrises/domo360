param (
    [string]$folderPath
)

# Cargar el ensamblado de dibujo
Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param (
        [string]$filePath,
        [int]$maxWidth,
        [int]$quality
    )

    try {
        # Cargar la imagen original
        $srcImage = [System.Drawing.Image]::FromFile($filePath)
        $srcWidth = $srcImage.Width
        $srcHeight = $srcImage.Height

        # Calcular nuevas dimensiones
        $newWidth = $srcWidth
        $newHeight = $srcHeight

        if ($srcWidth -gt $maxWidth) {
            $newWidth = $maxWidth
            $newHeight = [math]::Round(($srcHeight * $maxWidth) / $srcWidth)
        }

        # Crear bitmap de destino
        $destBitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
        
        # Configurar calidad de dibujado premium
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        # Dibujar la imagen redimensionada
        $graphics.DrawImage($srcImage, 0, 0, $newWidth, $newHeight)

        # Configurar la compresión JPEG
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality,
            $quality
        )
        
        # Obtener el codec JPEG
        $codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
        $jpegCodec = $codecs | Where-Object { $_.FormatDescription -eq "JPEG" }

        # Liberar el archivo original para poder sobrescribirlo
        $srcImage.Dispose()

        # Guardar en un archivo temporal
        $tempPath = $filePath + ".tmp"
        $destBitmap.Save($tempPath, $jpegCodec, $encoderParams)
        
        $destBitmap.Dispose()
        $graphics.Dispose()

        # Reemplazar el archivo original
        Remove-Item $filePath -Force
        Rename-Item $tempPath -NewName (Split-Path $filePath -Leaf)
        
        Write-Host "Optimizado con exito: $(Split-Path $filePath -Leaf) ($srcWidth x $srcHeight -> $newWidth x $newHeight)"
    }
    catch {
        Write-Error "Error procesando $filePath : $_"
    }
}

# Procesar todas las imágenes en el directorio de forma insensible a mayúsculas/minúsculas
Get-ChildItem -Path $folderPath | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' } | ForEach-Object {
    $file = $_.FullName
    if ($_.Name -eq "portadacasa1.png") {
        # Optimizar portada
        Optimize-Image -filePath $file -maxWidth 1600 -quality 75
    } else {
        # Optimizar panorámicas 360
        Optimize-Image -filePath $file -maxWidth 4096 -quality 70
    }
}
