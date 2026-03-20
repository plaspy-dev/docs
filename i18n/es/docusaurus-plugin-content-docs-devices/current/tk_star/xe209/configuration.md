---
slug: /tk_star/xe209/configuration
id: xe209-configuration
sidebar_label: Configuration
title: TK-Star - XE209 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK-Star XE209 para Plaspy con ajustes de servidor y comandos SMS para reporte GPRS
keywords:
  - configuración TK-Star XE209
  - instalación TK-Star XE209
  - XE209 Plaspy
  - configuración rastreador TK-Star
  - configuración GPS XE209
  - rastreo de vehículos XE209
  - configuración servidor XE209
  - configuración SMS XE209
  - configuración GPRS XE209
  - configuración rastreador Plaspy
---

# TK-Star - XE209 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador portátil TK-Star XE209 con Plaspy. Reúne los valores del servidor Plaspy y los comandos prácticos que comúnmente se usan para dirigir los dispositivos XE209 a reportar datos de ubicación en la plataforma Plaspy. Use esta información junto con la documentación del fabricante del XE209 al preparar los dispositivos para su despliegue.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando la telemetría llega a la plataforma. Los pasos exactos de configuración en el lado del fabricante para el XE209 pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas de aprovisionamiento del proveedor. Cuando corresponde, esta página incluye los comandos SMS del XE209 que aparecen en documentación pública para configurar APN, servidor, intervalo y modo.

## Resumen de la configuración

Esta configuración prepara el XE209 para comunicarse con Plaspy apuntando el dispositivo al endpoint del servidor de Plaspy, configurando parámetros GPRS y habilitando el reporte con un intervalo adecuado. El objetivo es asegurar que el rastreador establezca una conexión estable y que Plaspy reciba actualizaciones de ubicación y eventos para monitoreo e historial.

- Configure el APN del dispositivo y las credenciales opcionales para que el rastreador use datos móviles.
- Establezca el servidor y el puerto de Plaspy para que la información llegue a la plataforma.
- Defina el intervalo de reporte para que el dispositivo envíe actualizaciones con la frecuencia deseada.
- Active el modo GPRS en el dispositivo y aplique los ajustes para que la configuración entre en vigencia.
- Valide la conectividad y confirme que el rastreador aparezca en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo apropiado para los datos entrantes del rastreador.

## Requisitos típicos antes de la configuración

- Un rastreador XE209 cargado y encendido, listo para configurar.
- Acceso al canal de configuración por SMS del dispositivo o a la herramienta oficial de configuración TK-Star proporcionada por el fabricante.
- Una tarjeta SIM con plan de datos y el APN correcto del operador para datos GPRS móviles.
- Conocimiento de la contraseña del dispositivo si es distinta de la predeterminada; la contraseña pública documentada más común es 123456.
- Un método para recibir y confirmar respuestas del dispositivo a los comandos SMS durante la configuración.
- Cobertura de red en el área de despliegue para que el rastreador pueda establecer la conexión GPRS.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el XE209 envía datos de ubicación y del dispositivo mediante GPRS al endpoint y puerto compartidos del servidor Plaspy. Plaspy recibe el tráfico del dispositivo e identifica automáticamente el protocolo, lo que permite que el dispositivo aparezca en la plataforma Plaspy para monitoreo en tiempo real e historial.

- El rastreador reporta a la dirección y puerto del servidor Plaspy especificados en la configuración del dispositivo.
- Las actualizaciones de ubicación se envían según el intervalo de subida configurado para que Plaspy ofrezca seguimiento en vivo.
- Los reportes de eventos, como alertas o mensajes de estado, se reenvían a Plaspy para notificaciones e historial.
- La detección automática de protocolo de Plaspy elimina la necesidad de seleccionar manualmente un protocolo en la plataforma.
- Usar el endpoint compartido de Plaspy asegura un camino de integración consistente entre los dispositivos compatibles.

## Flujo común de configuración

1. Acceda al método oficial de configuración de TK-Star, como comandos SMS o el software del fabricante para XE209.
2. Ingrese el valor del servidor de Plaspy ya sea como d.plaspy.com o como la IP 54.85.159.138 en el campo de servidor.
3. Configure el puerto en 8888 para la configuración del servidor GPRS.
4. Elija UDP o TCP si el XE209 o la herramienta del fabricante requiere seleccionar el transporte.
5. Aplique o guarde la configuración en el dispositivo siguiendo el procedimiento del fabricante.
6. Reinicie el dispositivo si el firmware del XE209 o el método de configuración lo requieren.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en la plataforma y que las actualizaciones de posición llegan correctamente.

## Ejemplos de comandos de configuración

El XE209 puede configurarse por SMS usando una secuencia de comandos públicos. La contraseña predeterminada del dispositivo que aparece en la documentación pública es 123456. Preserve los marcadores de posición al reemplazar valores del operador.

- Restauración opcional a fábrica inicial (usar sólo si necesita resetear el dispositivo):
```text
begin123456
```

- Configurar el APN del operador (reemplace [apn] por el APN de su operador móvil):
```text
apn123456 [apn]
```

- Establecer nombre de usuario APN si lo requiere su operador (reemplace [apnu] por el usuario APN):
```text
apnuser123456 [apnu]
```

- Establecer contraseña APN si lo requiere su operador (reemplace [apnp] por la contraseña APN):
```text
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy (este comando usa la IP pública mostrada en la documentación de Plaspy):
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de subida a 60 segundos:
```text
upload123456 60
```

- Cambiar el dispositivo al modo de reporte GPRS:
```text
gprs123456
```

Notas sobre los marcadores de posición
- [apn] es la cadena APN del operador móvil requerida para datos GPRS.
- [apnu] es el nombre de usuario APN opcional si su operador lo solicita.
- [apnp] es la contraseña APN opcional si su operador lo solicita.

Siga el orden de los comandos cuando ese orden sea importante: por ejemplo, establezca los valores de APN antes de habilitar el modo GPRS. El comando de restauración de fábrica es opcional y debe usarse sólo cuando se necesite un reinicio inicial.

## Observaciones de configuración

- La configuración por SMS está documentada públicamente y se usa comúnmente para el aprovisionamiento inicial del XE209; siga la sintaxis SMS del fabricante exactamente, incluida la contraseña del dispositivo.
- Las versiones de firmware o revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme el conjunto correcto de comandos para el firmware de su XE209.
- Algunas herramientas de configuración permiten usar el dominio d.plaspy.com en lugar de la IP 54.85.159.138; use la forma que requiera el dispositivo o la sintaxis del comando SMS.
- Elija el transporte UDP o TCP en la configuración del dispositivo si el rastreador o la herramienta del proveedor solicita seleccionar un transporte.
- Pruebe y valide la conectividad después de la configuración confirmando que el dispositivo aparece y reporta en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el XE209 con Plaspy ofrece una forma directa de consolidar datos de ubicación y eventos de rastreadores portátiles en una sola plataforma de monitoreo. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos, las organizaciones pueden aplicar un proceso de configuración consistente para poner los dispositivos en línea y comenzar a recibir telemetría y alertas para supervisión operativa.

Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y orientación del fabricante para el XE209, verifique los detalles en el sitio oficial de TK-Star https://www.tk-star.com/ ya que el comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo.
