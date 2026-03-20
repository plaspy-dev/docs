---
slug: /carscop/cc_368/configuration
id: cc_368-configuration
sidebar_label: Configuration
title: Carscop - CC-368 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración y servidor para Carscop CC-368 con comandos públicos y ajustes compatibles con Plaspy
keywords:
  - Configuración Carscop CC-368
  - Configuración CC-368
  - Configuración servidor CC-368
  - Configuración rastreador Plaspy
  - Configuración GPS Plaspy
  - Comandos SMS CC-368
  - Configuración telemática vehicular
  - Configuración APN CC-368
  - Ajustes servidor Plaspy
  - Integración OBD II CC-368
---

# Carscop - Configuración del CC-368

Esta página documenta el contexto público de configuración para usar el Carscop CC-368 con Plaspy. Se enfoca en los ajustes prácticos y comandos SMS que se emplean habitualmente para apuntar las unidades CC-368 al endpoint del servidor de Plaspy y preparar el dispositivo para seguimiento en tiempo real, envío de telemetría y comandos remotos en la plataforma Plaspy. Cuando se requieren métodos específicos del fabricante, esta guía explica los pasos públicos y los valores esperados para usar con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los métodos de configuración por parte del fabricante para el CC-368 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo a continuación reflejan los comandos públicos expuestos para el CC-368 e incluyen la contraseña por defecto del dispositivo mostrada en el contenido de configuración público.

## Resumen de la configuración

El proceso de configuración prepara el CC-368 para reportar ubicación, telemetría OBD y datos de eventos a Plaspy de forma confiable. Los pasos públicos de configuración suelen incluir confirmar que el dispositivo tiene una SIM y conexión de red funcionales, definir el APN y apuntar el dispositivo al endpoint del servidor Plaspy para que los datos lleguen a Plaspy con manejo consistente de puerto y protocolo.

- Configure el APN y las credenciales del dispositivo para que el CC-368 pueda establecer conectividad de datos GPRS.
- Apunte el dispositivo al endpoint del servidor Plaspy para que la ubicación y la telemetría fluyan hacia los paneles de Plaspy.
- Ajuste la zona horaria y el comportamiento del equipo, como mantener conexión en línea, para asegurar informes puntuales.
- Valide la conectividad y la visibilidad en Plaspy después de aplicar los ajustes para confirmar el reporte correcto.
- Use SMS o la herramienta del fabricante para aplicar la configuración cuando sea necesario trabajar directamente en el vehículo o sin acceso remoto.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en hostname
- IP de servidor 54.85.159.138 para configuración basada en dirección numérica
- Puerto 8888 usado por todos los dispositivos en Plaspy
- Transporte: configure UDP o TCP en el puerto 8888 según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de configurar

- Una SIM móvil válida instalada en el CC-368 con datos habilitados y capacidad de SMS para la configuración inicial por SMS
- Acceso al método de configuración por SMS del dispositivo o a la herramienta oficial de Carscop proporcionada por el proveedor
- Conocimiento del APN del operador y, opcionalmente, del nombre de usuario y contraseña del APN de su operador celular
- La contraseña SMS por defecto del dispositivo si usa comandos SMS; el valor público de ejemplo es 123456 para muestras del CC-368
- Alimentación estable del rastreador o de la batería del vehículo durante la configuración y los ciclos de reinicio
- Capacidad para confirmar el reporte del dispositivo en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El CC-368 se configura para enviar su posición GNSS y telemetría al endpoint del servidor Plaspy para que los operadores puedan ver ubicación en vivo, rutas históricas, eventos y resultados de comandos remotos. Plaspy recibe estos reportes en el puerto compartido y usa detección automática de protocolo para interpretar los paquetes entrantes del rastreador.

- El dispositivo abre una conexión de datos GPRS y envía reportes a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy escucha en el puerto 8888 para UDP y TCP y detecta automáticamente el protocolo del rastreador
- Notificaciones de eventos como alarmas, estado de ignición o puertas son reenviadas a Plaspy para alertas y automatizaciones
- La telemetría OBD II y CANBUS puede ser reenviada a Plaspy para diagnóstico y monitoreo de flota cuando el dispositivo lo soporta
- Si está configurado, SMS puede usarse como respaldo o para entrega de comandos remotos durante la configuración o cuando no hay datos

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Carscop, utilice la herramienta del proveedor o envíe comandos SMS según soporte el CC-368.
2. Ingrese el endpoint del servidor Plaspy usando el hostname d.plaspy.com o la dirección numérica 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos compatibles.
4. Elija transporte UDP o TCP si la configuración de su dispositivo requiere seleccionar un protocolo de transporte.
5. Configure el APN y, si aplica, el nombre de usuario y la contraseña del APN para la SIM instalada para que el dispositivo pueda abrir una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta del fabricante o el flujo por SMS requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en línea del equipo y las actualizaciones recientes de posición en Plaspy.

## Comandos de configuración de ejemplo

El CC-368 soporta configuración vía SMS usando la contraseña del dispositivo. Los comandos siguientes son los comandos SMS públicos extraídos del contenido de configuración del dispositivo. Conserve los marcadores cuando sustituya el APN y las credenciales de su operador.

- Nota: Los ejemplos de configuración usan la contraseña por defecto del dispositivo 123456 en cada comando.
- El comando de restauración está mostrado como paso inicial u opcional cuando se requiere restaurar a valores de fábrica.

1) Restaurar ajustes de fábrica (paso inicial opcional)
```text
RESET*123456
```

2) Configurar la zona horaria a UTC 0
```text
TIMEZONE*123456*+00
```

3) Establecer el APN del operador
```text
APN*123456*[apn]
```
- [apn] es el marcador para el nombre del APN de su operador para acceso a datos.

4) Establecer nombre de usuario y contraseña del APN (opcional)
```text
USERNAME*123456*[apnu]*[apnp]
```
- [apnu] es el marcador del nombre de usuario del APN y [apnp] es el marcador de la contraseña del APN. Use esto solo si su operador requiere autenticación.

5) Configurar el servidor GPRS hacia Plaspy usando IP numérica y puerto
```text
IP*123456*54.85.159.138,8888
```
- Este comando apunta el dispositivo a Plaspy usando la IP pública del servidor y el puerto compartido 8888.

6) Mantener el rastreador en línea
```text
KEEPONLINE*123456
```

Aplique estos comandos en el orden indicado cuando el orden sea importante. Después de enviar el comando IP y confirmar los ajustes APN, verifique que el dispositivo establezca una sesión GPRS y comience a reportar a Plaspy.

## Notas de configuración

- El CC-368 soporta configuración por SMS como se muestra; las herramientas del proveedor o FOTA pueden ofrecer métodos alternativos que acepten d.plaspy.com o 54.85.159.138.
- La contraseña SMS por defecto en el ejemplo público es 123456; cambie las contraseñas del dispositivo según la política de seguridad de su organización después de la configuración inicial cuando sea posible.
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los comandos disponibles; siempre verifique la documentación actual del fabricante.
- Después de aplicar los ajustes, confirme que el dispositivo aparece en línea en Plaspy y que las posiciones y eventos llegan como se espera.

## Por qué usar Plaspy con esta configuración

Configurar el CC-368 para reportar a Plaspy ofrece una vía sencilla para organizaciones que necesitan rastreo en vivo, control remoto de acceso vehicular e integración de telemetría. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartido y asegurar que el APN y la conectividad sean correctos permite a los equipos consolidar GNSS, datos OBD II y alertas de eventos en una sola plataforma para monitoreo y automatización.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration notes, firmware behavior, and command syntax on the manufacturer website http://www.carscop.com/. Manufacturer specifications, setup methods, and device behavior can change over time so checking the official Carscop documentation is recommended.
