---
slug: /totemtech/at09_4g/configuration
id: at09_4g-configuration
sidebar_label: Configuration
title: Totemtech - AT09-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Totemtech AT09-4G con Plaspy, incluye comandos SMS y ajustes de servidor compartido
keywords:
  - Configuración Totemtech AT09-4G
  - Instalación AT09-4G
  - Rastreador GPS Totemtech Plaspy
  - Configuración de servidor AT09-4G
  - Configuración SMS AT09-4G
  - Configuración de rastreador Plaspy
  - Rastreo de vehículos AT09-4G
  - Configuración APN AT09-4G
  - Configuración del rastreador Totemtech
  - Configuración plataforma GPS AT09-4G
---

# Totemtech - Configuración AT09-4G

Esta página resume el contexto público de configuración para usar el rastreador Totemtech AT09-4G con Plaspy. Se centra en los ajustes de servidor prácticos y en ejemplos de comandos SMS disponibles públicamente para el AT09-4G, y muestra cómo aplicar esos valores para que el dispositivo reporte a Plaspy la ubicación y la telemetría en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, incluimos ejemplos de comandos SMS del manual del dispositivo para que usted pueda aplicar los ajustes de servidor de Plaspy y validar la conectividad.

## Resumen de la configuración

El proceso de configuración del AT09-4G prepara el dispositivo para enviar ubicación y telemetría a Plaspy y verifica la conectividad. En la mayoría de las instalaciones esto implica configurar el APN del operador móvil, apuntar el dispositivo al endpoint del servidor de Plaspy, seleccionar el protocolo de transporte si es necesario y validar que los reportes lleguen a la plataforma.

- Configure el APN y los parámetros GPRS/LTE para que el dispositivo use la red de datos móviles
- Apunte el rastreador al endpoint del servidor Plaspy y al puerto compartido de Plaspy
- Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere una elección explícita
- Opcionalmente realice un restablecimiento de fábrica o aplique la contraseña por defecto del dispositivo durante la configuración
- Valide los reportes en Plaspy para confirmar la visibilidad de posiciones y telemetría

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un AT09-4G alimentado e instalado o conectado a una fuente de alimentación de banco para que pueda arrancar y registrarse en la red móvil
- Una tarjeta SIM activa con plan de datos y la información APN del operador para conectividad GPRS o LTE
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante según la preferencia del instalador
- La contraseña por defecto del dispositivo si la configuración vía SMS requiere autenticación; el ejemplo público usa la contraseña por defecto 000000
- Acceso a Plaspy para confirmar que el dispositivo aparece y envía telemetría después de la configuración

## Cómo se conecta este rastreador a Plaspy

El AT09-4G se configura para enviar datos GNSS y telemetría al endpoint y puerto compartido de Plaspy para que la plataforma ingrese las actualizaciones de posición y los eventos del dispositivo. Los reportes pueden activarse por temporizadores, eventos de sensores o alarmas dependiendo de la configuración del dispositivo y las capacidades del firmware.

- El rastreador envía datos GPRS o LTE a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El dispositivo puede usar UDP o TCP en el puerto configurado según la elección del instalador
- Plaspy detecta automáticamente el protocolo del rastreador para decodificar los mensajes entrantes
- Una vez activo el reporte, Plaspy recibe actualizaciones de ubicación y datos de eventos para monitoreo en vivo y reportes históricos
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica despliegues con múltiples modelos

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS según las instrucciones del dispositivo
2. Ingrese d.plaspy.com como dominio del servidor o 54.85.159.138 como IP del servidor en el campo de ajustes del servidor
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos
4. Seleccione UDP o TCP como protocolo de transporte si el dispositivo requiere una selección explícita
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS para confirmar los ajustes
6. Reinicie o corte la energía del dispositivo si el firmware del rastreador lo requiere para aplicar los ajustes de red
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de ubicación y telemetría en la plataforma

## Ejemplos de comandos de configuración

El AT09-4G ofrece una opción de configuración basada en SMS. Los siguientes comandos SMS públicos son ejemplos extraídos de la documentación del dispositivo. Los comandos de ejemplo usan la contraseña por defecto del dispositivo 000000. Mantenga marcadores como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores específicos del operador cuando sea necesario.

- Reset de fábrica inicial opcional usando la contraseña por defecto
```text
*000000,007#
```
Etiqueta: restablecimiento de fábrica opcional o solo para configuración inicial

- Establecer el APN del operador incluyendo marcadores para usuario y contraseña
```text
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: reemplace {{apn}} con la cadena APN del operador móvil. Si el APN requiere un nombre de usuario use {{apnu}} y una contraseña use {{apnp}}; si no se requieren deje los marcadores vacíos según la sintaxis SMS del dispositivo.

- Establecer el servidor GPRS hacia Plaspy por IP con puerto e índice de servidor
```text
*000000,003,54.85.159.138,8888,1#
```
Explicación: esto apunta explícitamente el dispositivo a Plaspy usando la IP pública y el puerto compartido 8888. El parámetro final es un índice de servidor que el dispositivo usa para seleccionar el servidor primario.

- Habilitar reportes con acuse de recibo o establecer modo ACK
```text
*000000,019,1#
```
Explicación: establece ACK habilitado según el conjunto de comandos del fabricante.

- Establecer intervalos de reporte para actualizaciones periódicas, por ejemplo intervalo de 60 segundos
```text
*000000,60,60,0,60#
```
Explicación: configura parámetros de tiempo para el reporte de ubicación en el ejemplo proporcionado por el fabricante. Ajuste los valores según las necesidades de reporte y el plan de datos.

Nota: Mantenga la contraseña por defecto 000000 a menos que su procedimiento de instalación indique cambiarla. Si cambia la contraseña del dispositivo debe usar la nueva contraseña en los comandos SMS.

## Notas de configuración

- La configuración por SMS se muestra aquí porque forma parte de los comandos públicos del dispositivo. También pueden estar disponibles herramientas del fabricante o configuración por USB, frecuentemente usadas para despliegues masivos.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles. Confirme siempre el formato SMS exacto para la versión de firmware de su dispositivo.
- Elija TCP o UDP según sus requerimientos de confiabilidad y de firewall. Plaspy soporta ambos y detecta el protocolo automáticamente, pero el transporte seleccionado debe coincidir con el diseño de su red.
- Todos los dispositivos Plaspy usan el mismo puerto 8888, lo que simplifica la configuración del servidor al registrar múltiples modelos de dispositivos.
- Si se requieren credenciales APN use los valores correctos {{apn}}, {{apnu}} y {{apnp}} proporcionados por su operador móvil; dejar usuario o contraseña vacíos es aceptable cuando el operador no los exige.

## Por qué usar Plaspy con esta configuración

Usar el AT09-4G con Plaspy ofrece un camino directo hacia ubicación en tiempo real y telemetría extensa para monitoreo de flotas y activos. Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto compartido 8888 y habilitar los disparadores de reporte deseados permite que Plaspy ingiera datos GNSS, de sensores y eventos para visibilidad operativa, alertas y análisis histórico.

Para saber más sobre Plaspy visite https://www.plaspy.com y revise los detalles del dispositivo Totemtech en el sitio del fabricante http://www.totemtek.com/ para obtener las instrucciones específicas y notas de firmware más recientes. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que es recomendable verificar los detalles actuales en la documentación oficial de Totemtech.
