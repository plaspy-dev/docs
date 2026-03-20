---
slug: /sinotrack/st_901al/configuration
id: st_901al-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901AL Configuration
sidebar_class_name: menu_item_tracker
description: Instrucciones públicas para configurar el SinoTrack ST-901AL con Plaspy mediante SMS y ajustes de servidor GPRS
keywords:
  - configuración SinoTrack ST 901AL
  - instalación SinoTrack ST 901AL
  - configuración ST 901AL Plaspy
  - configuración del servidor ST 901AL
  - comandos SMS ST 901AL
  - configuración APN ST 901AL
  - integración rastreador GPS Plaspy
  - guía configuración rastreador vehicular
  - configuración servidor GPRS
  - instalación rastreador de flota
---

# SinoTrack - Configuración ST-901AL

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-901AL con Plaspy. Muestra los valores de servidor compartidos que Plaspy requiere y ofrece orientación práctica basada en el flujo de comandos SMS disponible públicamente para dispositivos SinoTrack. Use esta página como referencia para apuntar el rastreador a Plaspy y validar la conectividad básica en la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre debe contrastar con las instrucciones del fabricante. Los comandos SMS de ejemplo que aparecen a continuación son los comandos públicos documentados para dispositivos SinoTrack y se presentan en el orden mostrado en la documentación del dispositivo cuando aplica.

## Resumen de configuración

Configurar el ST-901AL para Plaspy garantiza que el rastreador envíe sus datos de ubicación y eventos por GPRS al endpoint de ingestión de Plaspy, de modo que los activos queden visibles en la plataforma. El proceso normalmente prepara el acceso a la red, apunta el dispositivo al servidor y puerto correctos, y verifica el reporte usando el comando de verificación del dispositivo.

- Prepare el equipo con una instalación con alimentación y una SIM activa configurada para datos.
- Configure las credenciales APN para que el rastreador pueda usar GPRS y acceder a Plaspy.
- Apunte el rastreador a Plaspy usando el dominio o IP del servidor de la plataforma y el puerto compartido que usa Plaspy.
- Use el comando de verificación del dispositivo para confirmar que el ID del rastreador y las entradas del servidor son correctas.
- Valide que el dispositivo aparece y reporta ubicación en Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

- Dominio de servidor d.plaspy.com para la configuración del endpoint de la plataforma
- IP de servidor 54.85.159.138 como dirección alternativa o directa del servidor
- Puerto 8888 que Plaspy usa para todos los dispositivos soportados
- Soporte de transporte: configure UDP o TCP en el puerto 8888 según los requisitos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usan reportes estándar pueden ser ingeridos sin selección manual de protocolo en Plaspy

## Requisitos habituales antes de la configuración

- Un ST-901AL instalado y con alimentación que permita acceso al cableado y montaje seguro por parte del instalador
- Una SIM funcional con un plan de datos activo y las credenciales APN correctas del operador móvil
- Capacidad para enviar comandos SMS al dispositivo desde un número autorizado o una herramienta de instalador
- El IMEI del equipo o el ID que reporte el dispositivo para asociarlo con la unidad en Plaspy
- Documentación del fabricante o acceso a soporte de instalador en caso de diferencias específicas de firmware
- Opcional: una ruta de prueba corta o una ventana de prueba estacionaria para observar que los reportes GPRS lleguen a Plaspy

## Cómo se conecta este rastreador a Plaspy

El ST-901AL se configura para enviar por GPRS los datos de ubicación y eventos al servidor de Plaspy. Al establecer el APN y los valores del servidor GPRS hacia Plaspy, el rastreador abrirá una sesión de datos y enviará actualizaciones periódicas al endpoint y al puerto compartidos de Plaspy.

- El rastreador usa las credenciales APN configuradas para establecer una conexión de datos GPRS
- El reporte por GPRS se dirige a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy recibe la conexión entrante (UDP o TCP) y detecta automáticamente el protocolo del rastreador
- Las actualizaciones de ubicación y eventos se hacen visibles en Plaspy para monitoreo y alertas
- SMS permanece disponible como método de configuración de respaldo y para algunos reportes según la preferencia del instalador

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante documentado por SinoTrack, normalmente comandos SMS o una herramienta de instalador aprobada.
2. Verifique que el dispositivo tenga una SIM operativa e ingrese las credenciales APN del operador usando el comando APN.
3. Introduzca el dominio de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto del dispositivo a 8888 ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy admite ambos cuando el rastreador los acepta.
6. Aplique o guarde la configuración y cambie el dispositivo al modo de reporte GPRS si el equipo lo solicita.
7. Reinicie o corte la alimentación del rastreador cuando lo indique la documentación del fabricante.
8. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y comprobando que la unidad aparece en el panel de Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son los comandos públicos documentados para dispositivos SinoTrack y se presentan en el orden mostrado en la documentación del fabricante. Preserve los marcadores de posición al introducir las credenciales APN.

- Paso inicial opcional para restaurar los valores de fábrica (usar solo cuando sea necesario):
```text
RESET
```

- Ajustar la zona horaria a UTC 0:
```text
8960000E00
```

- Configurar el APN del operador móvil. Reemplace los marcadores de posición con los valores de su operador:
```text
8030000 [apn] [apnu] [apnp]
```
Explicación de los marcadores:
- [apn] es el nombre del APN proporcionado por su operador de SIM
- [apnu] es el nombre de usuario del APN si el operador lo requiere (vacío si no aplica)
- [apnp] es la contraseña del APN si el operador lo requiere (vacío si no aplica)

- Establecer el servidor GPRS a la IP y puerto de Plaspy. Este ejemplo usa la IP del servidor y el puerto compartido:
```text
8040000 54.85.159.138 8888
```
Nota: Si el firmware del dispositivo acepta un dominio en lugar de una IP, d.plaspy.com es el endpoint de dominio de Plaspy que puede usarse donde sea soportado.

- Establecer el intervalo de subida cuando se detecte ignición o movimiento (ejemplo en segundos):
```text
8050000 60
```

- Establecer el intervalo de subida cuando el dispositivo está apagado o estático (ejemplo en segundos):
```text
8090000 60
```

- Cambiar el rastreador al modo de reporte por GPRS:
```text
7100000
```

- Verificar la configuración actual del dispositivo y recuperar el ID usado por la ingestión de Plaspy:
```text
RCONF
```

Siga los comandos en el orden listado para la configuración inicial cuando corresponda. Emita RESET únicamente cuando sea necesario restaurar a fábrica.

## Notas de configuración

- La configuración por SMS de SinoTrack es un método común en campo para instaladores; algunos instaladores pueden usar una herramienta de software según las herramientas del proveedor y el firmware.
- Las revisiones de firmware y variantes de hardware pueden cambiar el comportamiento exacto de los comandos o los parámetros aceptados; verifique con el manual del dispositivo cuando sea posible.
- El ejemplo de configuración usa la IP del servidor de Plaspy 54.85.159.138 y el puerto 8888; donde el dispositivo permita un dominio, d.plaspy.com puede usarse como endpoint.
- Elija UDP o TCP según la preferencia del instalador y el soporte del dispositivo; Plaspy acepta ambos transportes y detecta automáticamente el protocolo usado por los dispositivos entrantes.
- Confirme siempre que el dispositivo reporta a Plaspy después de la configuración usando RCONF y comprobando la visibilidad en la plataforma Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SinoTrack ST-901AL con Plaspy ofrece una vía simple hacia un monitoreo vehicular confiable y supervisión operativa. El ST-901AL soporta reportes por SMS y GPRS y permite configurar APN y servidor por SMS, lo que facilita despliegues rápidos en campo e integración en un entorno de rastreo Plaspy existente.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer documentation verify information at the official SinoTrack website https://www.sinotrackgps.com/ as setup methods and firmware behavior can change over time.
