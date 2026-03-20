---
slug: /sentar/q60_tracker/configuration
id: q60_tracker-configuration
sidebar_label: Configuration
title: Sentar - Q60 Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Sentar Q60 para Plaspy con valores de servidor y ejemplos de SMS
keywords:
  - Configuración Sentar Q60
  - Instalación Sentar Q60
  - Configuración rastreador GPS Q60
  - Configuración Sentar en Plaspy
  - Configuración servidor Q60
  - Configuración APN Q60
  - Configuración plataforma Sentar GPS
  - Comandos SMS Q60
  - Dispositivos compatibles con Plaspy
  - Configuración rastreador de activos Sentar
---

# Sentar - Configuración del rastreador Q60

Esta página describe el contexto público de configuración para usar el Sentar Q60 con Plaspy. Explica los valores del servidor Plaspy necesarios para la integración, los pasos prácticos que normalmente se usan para preparar un Q60 para enviar reportes y los comandos SMS de ejemplo publicados como guía pública de instalación. Use esta guía para entender cómo se suele apuntar el Q60 a Plaspy para mapas, alertas e historial.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación, las herramientas del proveedor y otras variables. El Q60 admite configuración por SMS y por GPRS; cuando abajo se muestran comandos de ejemplo, reflejan las instrucciones públicas comunes del fabricante y la contraseña predeterminada del dispositivo indicada en esas instrucciones.

## Visión general de la configuración

El proceso de configuración prepara el Q60 para comunicarse con Plaspy, asegurando que el dispositivo tenga una ruta de datos funcional y envíe actualizaciones periódicas de posición. Los pasos y comandos de ejemplo a continuación se concentran en apuntar el rastreador al endpoint de Plaspy, validar la configuración de red y el APN, y confirmar que el rastreador se reporte en la plataforma.

- Configure el APN y los parámetros GPRS del dispositivo para que el rastreador pueda usar datos móviles.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que los reportes de ubicación lleguen a Plaspy.
- Establezca un intervalo de subida apropiado para que Plaspy reciba actualizaciones de ubicación oportunas.
- Opcionalmente ajuste la zona horaria y realice un reinicio de fábrica solo si la configuración inicial lo requiere.
- Valide la conectividad usando el comando de verificación del dispositivo y confirme que la unidad aparece en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — todos los dispositivos en Plaspy usan el mismo puerto  
- Transport support: UDP or TCP on port 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la instalación

- Un equipo Q60 cargado y funcionando con una nano SIM activa que soporte datos GPRS y SMS para configuración.
- Acceso al dispositivo (físico o mediante la herramienta del instalador) y posibilidad de enviar mensajes SMS de configuración si opta por la configuración por SMS.
- Los valores correctos de APN, usuario APN y contraseña APN del operador para habilitar datos móviles.
- La contraseña predeterminada del dispositivo usada en los comandos públicos es 123456; confirme este valor para su unidad y esté preparado para cambiarla según las indicaciones del fabricante.
- Una cuenta en Plaspy y conocimiento de cómo verificar la presencia del dispositivo en su panel de Plaspy.
- Documentación del fabricante o contacto de soporte para instrucciones específicas por firmware y cualquier revisión del modelo.

## Cómo se conecta este rastreador a Plaspy

El Q60 se configura para reportar posición y telemetría básica a Plaspy usando conectividad GPRS. Una vez que el dispositivo tenga un APN funcional y el servidor GPRS esté apuntando a Plaspy, el rastreador transmitirá subidas periódicas al endpoint compartido y al puerto donde la plataforma recibe y muestra los datos.

- Los datos del dispositivo se envían al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El rastreador puede usar transporte UDP o TCP según la configuración; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse, por lo que no se requiere seleccionar protocolo en la plataforma.
- Interválicos de subida regulares permiten actualizaciones de posición en tiempo real e informes de eventos dentro de Plaspy.
- Comandos de verificación o consultas de estado pueden usarse para confirmar la configuración antes de validar la actividad en Plaspy.

## Flujo de trabajo típico de configuración

1. Consulte el método oficial de configuración Sentar para su Q60, normalmente comandos SMS o la herramienta del fabricante documentada por Sentar.
2. Asegúrese de que el equipo tenga una nano SIM funcional con plan de datos activo y la información del APN del operador.
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor GPRS del dispositivo.
4. Configure el puerto del dispositivo en 8888 según lo requerido por Plaspy y seleccione UDP o TCP si el equipo solicita elegir el transporte.
5. Configure el APN, usuario APN y contraseña APN según lo proporcione el operador móvil usando el método del fabricante.
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante recomiendan un reinicio.
7. Valide que el dispositivo se reporte en Plaspy usando el comando de estado del dispositivo y confirmando que la unidad aparece en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El Q60 puede configurarse por SMS usando los formatos públicos de comando que siguen. Estos comandos están basados en ejemplos publicados por el fabricante y usan la contraseña predeterminada 123456 cuando se indica. Envíe cada comando como un SMS al número del dispositivo. Los comandos están listados en la secuencia recomendada; el primer comando es un reinicio de fábrica y es opcional o solo se utiliza durante la configuración inicial cuando sea necesario.

1. Factory reset (optional initial step)
```
pw,123456,factory#
```
2. Set the time zone to UTC 0
```
pw,123456,lz,0,0#
```
3. Query IMSI to check mobile network MCC and MNC
```
pw,123456,imsi#
```
4. Set the operator APN where [apn] is the APN, [apnu] is the APN username, [apnp] is the APN password, and xxxyy represents MCC and MNC
```
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
- Explicación: Reemplace [apn], [apnu] y [apnp] con los valores de su operador. Los caracteres finales xxxyy representan los valores combinados MCC MNC si el dispositivo lo requiere.

5. Set the GPRS server to the Plaspy server IP and port
```
pw,123456,ip,54.85.159.138,8888#
```
- Alternative using domain form if supported by firmware (use d.plaspy.com)
```
pw,123456,domain,d.plaspy.com,8888#
```
6. Set the upload interval to 300 seconds
```
pw,123456,upload,300#
```
7. Check device settings and status
```
pw,123456,ts#
```

Nota: Algunos comandos de ejemplo muestran la forma con dominio para mayor claridad. Use el formato de comando soportado por su firmware. Si el dispositivo requiere una palabra clave o separador distinto, consulte la documentación de Sentar.

## Notas de configuración

- Variaciones de firmware y regionales pueden cambiar la sintaxis SMS exacta o las palabras clave disponibles; siempre verifique con la documentación actual de Sentar.
- La configuración por SMS es un método público común para el Q60; si prefiere un método por software o USB, consulte los recursos de Sentar para herramientas alternas de configuración.
- Elija UDP o TCP según la capacidad del dispositivo; Plaspy acepta ambos en el puerto 8888 pero el equipo puede preferir un modo de transporte.
- Conserve los marcadores de posición [apn], [apnu] y [apnp] cuando prepare comandos SMS y sustituya los valores del operador exactamente.
- Los ejemplos públicos de comandos usan la contraseña predeterminada 123456 según lo publicado; cambie la contraseña del dispositivo mediante el procedimiento del fabricante cuando corresponda para asegurar la unidad.

## Por qué usar Plaspy con esta configuración

Usar el Sentar Q60 con Plaspy ofrece una forma sencilla de integrar rastreo personal compacto o seguimiento de activos pequeños en un entorno monitoreado. Con el Q60 apuntando al endpoint y puerto compartido de Plaspy, las organizaciones pueden aprovechar el mapeo, las alertas y el historial de Plaspy manteniendo la configuración del dispositivo simple mediante comandos SMS públicos o la herramienta del fabricante.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el Sentar Q60 visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante verifique la documentación oficial de Sentar en http://www.sentarsmart.com/ ya que esas especificaciones y comandos pueden cambiar con el tiempo.
