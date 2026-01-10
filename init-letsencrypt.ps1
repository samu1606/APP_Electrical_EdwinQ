# Script para inicializar certificados SSL con Let's Encrypt

Write-Host "Inicializando certificados SSL..." -ForegroundColor Green

# Crear directorios necesarios
New-Item -ItemType Directory -Path "certbot/conf" -Force | Out-Null
New-Item -ItemType Directory -Path "certbot/www" -Force | Out-Null

# Generar certificado para el frontend
Write-Host "`nGenerando certificado para elingesmartgrids.cloud..." -ForegroundColor Yellow
docker-compose run --rm certbot certonly --webroot -w /var/www/certbot `
    -d elingesmartgrids.cloud -d www.elingesmartgrids.cloud `
    --email tu-email@example.com `
    --agree-tos `
    --no-eff-email `
    --force-renewal

# Generar certificado para el backend
Write-Host "`nGenerando certificado para api.elingesmartgrids.cloud..." -ForegroundColor Yellow
docker-compose run --rm certbot certonly --webroot -w /var/www/certbot `
    -d api.elingesmartgrids.cloud `
    --email tu-email@example.com `
    --agree-tos `
    --no-eff-email `
    --force-renewal

Write-Host "`n¡Certificados generados exitosamente!" -ForegroundColor Green
Write-Host "Ahora ejecuta: docker-compose up -d nginx" -ForegroundColor Cyan
