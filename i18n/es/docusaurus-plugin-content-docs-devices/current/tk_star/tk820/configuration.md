---
slug: /tk_star/tk820/configuration
id: tk820-configuration
sidebar_label: Configuration
title: TK-Star - TK820 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK-Star TK820 para integrarlo con Plaspy, con ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - configuración TK-Star TK820
  - configuración TK820 para Plaspy
  - ajustes de servidor TK820
  - comandos SMS TK820
  - configuración GPRS TK820
  - ajustes APN TK820
  - configuración de rastreador GPS TK820
  - configuración de rastreadores Plaspy
  - instalación plataforma Plaspy TK820
  - guía de instalación TK820
---

# TK-Star - Configuración del TK820

Esta página documenta el contexto público de configuración para usar el rastreador portátil 4G TK-Star TK820 con la plataforma Plaspy. Se enfoca en los ajustes prácticos de servidor y el flujo de instalación habitualmente necesarios para que el dispositivo envíe ubicaciones y alertas a Plaspy, y referencia los comandos SMS públicos proporcionados por el fabricante cuando aplica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que la guía aquí debe usarse como referencia práctica de integración y siempre confirme cualquier paso específico del dispositivo con la documentación de TK-Star.

## Resumen de la configuración

El proceso de configuración prepara el TK820 para comunicarse con el endpoint de recolección de Plaspy, de modo que el dispositivo pueda enviar actualizaciones de ubicación, alertas e información de estado. Para el TK820 esto generalmente implica configurar el APN, apuntar el servidor GPRS correcto, establecer un intervalo de subida y colocar el rastreador en modo de reporte GPRS usando el método de configuración del fabricante.

- Configure el APN de la red en el dispositivo para que pueda usar datos móviles para reportes GPRS.
- Apunte el dispositivo al endpoint de servidor de Plaspy y establezca el puerto correcto que usa la plataforma.
- Defina un intervalo de subida adecuado para equilibrar frecuencia de reporte y duración de batería.
- Habilite el reporte por GPRS o cambie el rastreador al modo de reporte correspondiente.
- Verifique que el rastreador sea visible en Plaspy y que reciba actualizaciones de ubicación.
- Use el método oficial de configuración de TK-Star (comandos SMS o herramienta del fabricante) según la documentación.

## Ajustes de servidor de Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el TK820 para el reporte:

- Dominio de servidor d.plaspy.com
- IP de servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Estos valores son los detalles públicos del endpoint que Plaspy provee para integraciones de dispositivos y deben establecerse en el rastreador mediante comandos SMS o la herramienta de configuración del fabricante.

## Requisitos típicos antes de la instalación

- Un TK820 con batería cargada y encendido, con una tarjeta SIM funcional que tenga datos y/o capacidad SMS para la configuración.
- Los datos del APN del operador móvil para la SIM instalada (APN y, opcionalmente, usuario y contraseña APN).
- Acceso al método oficial de configuración de TK-Star (comandos SMS o software del proveedor) y la contraseña del dispositivo si se requiere.
- Un lugar para enviar y recibir comandos SMS o una herramienta del fabricante capaz de cambiar las configuraciones de servidor y GPRS.
- Información básica del dispositivo como el IMEI para poder confirmar el equipo en Plaspy después de la configuración.
- Un entorno de prueba en Plaspy donde pueda validar que el rastreador reporta correctamente.

## Cómo se conecta este rastreador a Plaspy

El TK820 se configura para reportar datos GPS y posicionamiento auxiliar a un único endpoint y puerto de servidor de Plaspy. Una vez que GPRS esté habilitado y se hayan establecido el servidor GPRS y el APN en el dispositivo, el rastreador enviará actualizaciones periódicas de ubicación a Plaspy, donde se procesan y muestran en la plataforma.

- El dispositivo envía cargas periódicas al endpoint de Plaspy en 54.85.159.138 puerto 8888 (o por el dominio d.plaspy.com si el dispositivo lo tiene configurado).
- El rastreador usa UDP o TCP según cómo esté configurado.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se utiliza el mismo puerto 8888 entre los dispositivos soportados.
- Los datos subidos quedan disponibles en Plaspy para seguimiento en tiempo real, alertas de eventos y reproducción histórica de rutas.
- Los eventos de movimiento y SOS enviados por el dispositivo son recibidos por Plaspy y convertidos en alertas y notificaciones.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TK-Star o al software proporcionado por el fabricante (comandos SMS o herramienta del proveedor).
2. Configure los valores del APN del dispositivo usando el APN del operador y establezca usuario y contraseña APN si el operador los requiere.
3. Ingrese el servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección de servidor y configure el puerto 8888.
4. Elija UDP o TCP en el dispositivo si el firmware solicita seleccionar el transporte.
5. Defina un intervalo de reporte/subida apropiado para su caso de uso y guarde/aplique la configuración.
6. Reinicie o corte la alimentación del dispositivo si el fabricante lo recomienda para que los ajustes tomen efecto.
7. Valide en Plaspy que el dispositivo esté reportando ubicación y eventos al endpoint del servidor y verifique el IMEI o identificador del dispositivo.

## Ejemplos de comandos de configuración

El TK820 soporta configuración vía SMS. Los comandos SMS públicos abajo usan la contraseña del dispositivo 123456 que es el valor de fábrica indicado en la documentación del fabricante. Reemplace los marcadores y la contraseña según la política de su dispositivo.

- Reinicio opcional a valores de fábrica (usar solo cuando necesite restaurar los valores por defecto):
```sms
begin123456
```

- Configurar el APN del operador (reemplace {{apn}} por el APN del operador móvil):
```sms
apn123456 {{apn}}
```

- Establecer el usuario APN (si su operador requiere usuario; reemplace {{apnu}}):
```sms
apnuser123456 {{apnu}}
```

- Establecer la contraseña APN (si su operador requiere contraseña; reemplace {{apnp}}):
```sms
apnpasswd123456 {{apnp}}
```

- Configurar el servidor GPRS hacia Plaspy (este ejemplo usa la IP pública y el puerto de Plaspy):
```sms
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de subida a 60 segundos (ajuste el valor según sea necesario):
```sms
upload123456 60
```

- Cambiar el rastreador a modo de reporte GPRS:
```sms
gprs123456
```

Notas sobre marcadores y contraseña:
- {{apn}} es la cadena APN proporcionada por el operador móvil.
- {{apnu}} es el usuario APN si se requiere; {{apnp}} es la contraseña APN si se requiere.
- 123456 es la contraseña predeterminada del dispositivo mostrada en los comandos públicos de TK-Star; reemplácela si la contraseña del dispositivo fue cambiada.

Dependiendo del firmware y de las variantes regionales, el TK820 puede aceptar la configuración del servidor mediante el dominio d.plaspy.com en lugar de la IP numérica. Use la herramienta del fabricante o la sintaxis SMS soportada por su firmware para establecer el dominio si está disponible.

## Notas de configuración

- Diferencias de firmware y revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; siempre verifique el formato exacto de comandos SMS para el firmware de su dispositivo.
- El TK820 soporta transporte UDP y TCP; elija el transporte requerido por su entorno, pero recuerde que Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- La configuración vía SMS es conveniente para dispositivos en campo, pero las herramientas de proveedor o el software de aprovisionamiento pueden ser más eficientes para despliegues masivos.
- Si realiza un reinicio de fábrica durante la configuración, trate ese paso como opcional y úselo solo cuando sea necesario para recuperación o aprovisionamiento inicial.
- Después de configurar APN y servidor, espere unos minutos para que el dispositivo se registre en la red y comience las subidas GPRS antes de iniciar un proceso de solución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el TK-Star TK820 con Plaspy ofrece una vía directa para obtener ubicación en tiempo real, alertas de movimiento y almacenamiento histórico de rutas en una única plataforma. Al configurar el TK820 para reportar al endpoint y puerto compartido de Plaspy, las organizaciones obtienen visibilidad consistente de la ubicación y los eventos de los dispositivos, centralizados en los paneles y notificaciones de Plaspy.

Para conocer más sobre Plaspy y cómo gestiona la telemetría de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. Para la sintaxis de comandos específica más reciente, el comportamiento del firmware y las instrucciones de configuración del fabricante, verifique los detalles en el sitio oficial de TK-Star https://www.tk-star.com/ para asegurarse de que su configuración refleje la guía más actual del fabricante.
