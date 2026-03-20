---
slug: /teltonika/ftc305/configuration
id: ftc305-configuration
sidebar_label: Configuration
title: Teltonika - FTC305 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el Teltonika FTC305 y conectarlo a Plaspy usando la configuración de servidor compartida y un ejemplo de comando
keywords:
  - Configuración Teltonika FTC305
  - Configuración FTC305
  - FTC305 Plaspy
  - Configuración rastreador Teltonika
  - Configuración servidor FTC305
  - Configuración GPS Plaspy
  - Configuración plataforma GPS FTC305
  - Telemetría CAN bus Teltonika
  - Configuración rastreo flotas
  - Configuración dispositivo Plaspy
---

# Teltonika - Configuración FTC305

Esta página describe el contexto público de configuración para usar el rastreador Teltonika FTC305 con Plaspy. Se enfoca en los detalles del servidor compartido que Plaspy requiere y en los pasos prácticos para apuntar un FTC305 al endpoint de Plaspy, de modo que el dispositivo pueda enviar datos GNSS y telemetría a su instancia de Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor utilizadas para la configuración. El FTC305 es compatible con Plaspy por defecto y el ejemplo de comando del fabricante que se muestra más abajo muestra cómo establecer el APN y los valores del servidor; ajuste los comandos y la elección del transporte según el firmware del dispositivo y las herramientas del instalador.

## Visión general de la configuración

Este proceso prepara el FTC305 para comunicarse con Plaspy asignando el endpoint y los parámetros de transporte del servidor Plaspy, asegurando que el dispositivo pueda abrir una sesión y entregar la posición y la telemetría a la plataforma. El ejemplo de configuración incluido muestra una actualización de parámetros concisa que establece los valores de APN y la dirección y puerto del servidor Plaspy.

- Configure el APN y credenciales del dispositivo para que la radio celular pueda establecer conectividad de datos.
- Apunte el FTC305 al dominio o IP del servidor Plaspy para que los reportes se envíen a Plaspy.
- Elija UDP o TCP si el dispositivo requiere selección de transporte.
- Aplique y guarde la configuración, luego reinicie el rastreador si es necesario para comenzar a reportar.
- Verifique que el dispositivo aparezca en Plaspy y que la ubicación y la telemetría sean visibles.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son la configuración pública de Plaspy que debe usar al configurar el FTC305 para reportar a Plaspy. Utilice el dominio d.plaspy.com o la IP 54.85.159.138 con el puerto 8888 y seleccione UDP o TCP según lo requiera la herramienta de configuración de su rastreador.

## Requisitos típicos antes de la configuración

- Un dispositivo FTC305 encendido y accesible, instalado o en bancada para la configuración inicial.  
- Una tarjeta SIM celular válida con plan de datos y la información APN correcta del operador.  
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta de configuración del proveedor compatible con el dispositivo.  
- Conocimiento de la versión de firmware y la variante de hardware para seguir el procedimiento correcto del proveedor.  
- Herramientas básicas para confirmar conectividad, como consola serial, terminal SMS o un teléfono móvil para enviar SMS de configuración si el dispositivo lo soporta.  

## Cómo se conecta este rastreador a Plaspy

El FTC305 se configura para reportar la posición GNSS y la telemetría disponible al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir y mostrar los datos en mapas, alertas y paneles de telemetría. Una vez apuntado a Plaspy, el dispositivo establece conexiones salientes al servidor Plaspy y envía reportes periódicos y mensajes basados en eventos.

- El rastreador utiliza el APN configurado para obtener conectividad IP antes de abrir una sesión hacia d.plaspy.com o 54.85.159.138.  
- Los paquetes de datos se envían al puerto 8888 usando UDP o TCP según la selección en la configuración del dispositivo.  
- Plaspy detecta automáticamente el protocolo del rastreador al recibir los mensajes, por lo que no es necesario seleccionar el protocolo por dispositivo dentro de Plaspy.  
- Las posiciones y la telemetría del bus CAN se entregan a Plaspy para mapas en tiempo real, alertas y reportes históricos una vez que el dispositivo está conectado.  
- La visibilidad en la plataforma permite la monitorización operativa y alertas por geocerca o movimiento basadas en los mensajes recibidos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el FTC305 (por ejemplo comandos SMS o la herramienta del proveedor).  
2. Configure el APN y las credenciales del dispositivo usando los valores proporcionados por su operador móvil.  
3. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.  
4. Establezca el puerto del servidor en 8888.  
5. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.  
6. Aplique o guarde la configuración y reinicie el dispositivo si así lo exige la documentación del fabricante.  
7. Verifique que el dispositivo reporte a Plaspy comprobando la actividad del dispositivo en Plaspy y confirmando que la posición y la telemetría sean visibles.

## Comandos de configuración de ejemplo

El fabricante proporciona un comando compacto que actualiza los parámetros de APN y servidor en un solo paso. Mantenga los marcadores de posición de APN cuando los reemplace por los valores de su operador.

- Example single command to set APN and Plaspy server parameters

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre este comando y los marcadores de posición
- {{apn}} es el nombre del APN del operador celular requerido para la conexión de datos.  
- {{apnu}} es el nombre de usuario del APN si su operador lo requiere; déjelo en blanco u omítalo si no se usa.  
- {{apnp}} es la contraseña del APN si el operador lo solicita.  
- El comando establece el dominio del servidor en d.plaspy.com y el puerto en 8888, como exige Plaspy.  
- Envíe este comando usando el método soportado por el fabricante, por ejemplo SMS o la herramienta de configuración del proveedor según la documentación del dispositivo.  
- No cambie los valores del dominio o del puerto a menos que Plaspy o su integrador se lo indiquen; Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de los parámetros y la sintaxis de los comandos; siempre verifique los comandos con las notas de la versión de firmware del dispositivo.  
- Algunos instaladores prefieren la configuración por SMS mientras que otros usan una herramienta de configuración de escritorio o web. Use el método del fabricante que corresponda con el SKU y el firmware de su dispositivo.  
- Elegir UDP o TCP puede afectar la fiabilidad de los mensajes y el comportamiento en la red; seleccione el transporte que se ajuste a su entorno de conectividad y a las restricciones del operador.  
- Si necesita usar la IP del servidor en lugar del dominio, especifique 54.85.159.138 con el puerto 8888 como alternativa a d.plaspy.com.  
- Mantenga un registro del APN y los ajustes de servidor aplicados a cada dispositivo para facilitar la resolución de problemas y la gestión del inventario de la flota.

## Por qué usar Plaspy con esta configuración

Usar el FTC305 con Plaspy ofrece a gerentes de flota y operadores una vía sencilla para ingerir posiciones GNSS y la telemetría CAN disponible en una única plataforma para seguimiento, alertas y reportes. El diseño robusto del FTC305, su amplio rango de entradas de alimentación y sus capacidades de telemetría, combinadas con los ajustes de servidor de Plaspy, lo hacen adecuado para movilidad eléctrica y flotas especializadas que requieren visibilidad continua y análisis operativos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration guidance, firmware notes, and manufacturer details on the official Teltonika site https://www.teltonika-gps.com/ since manufacturer setup methods and firmware behavior can change over time.
