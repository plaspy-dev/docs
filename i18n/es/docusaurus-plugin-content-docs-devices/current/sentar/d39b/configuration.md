---
slug: /sentar/d39b/configuration
id: d39b-configuration
sidebar_label: Configuration
title: Sentar - D39B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el reloj Sentar D39B en Plaspy con ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración Sentar D39B
  - Instalación Sentar D39B
  - Sentar D39B Plaspy
  - Configuración GPS D39B
  - Configuración reloj infantil rastreador
  - Configuración rastreador Sentar
  - Configuración dispositivo Plaspy
  - Configuración servidor Plaspy
  - Comandos SMS D39B
  - Configuración rastreador GPS Plaspy
---

# Sentar - Configuración D39B

Esta página explica el contexto público de configuración para usar el reloj inteligente infantil Sentar D39B con la plataforma Plaspy. Reúne los ajustes del servidor Plaspy que debe aplicar, los prerrequisitos habituales antes de la configuración y una guía práctica de configuración vía SMS basada en el conjunto público de comandos del dispositivo. Utilice esta guía para preparar el D39B y asegurar que reporte ubicación y estado a Plaspy de forma confiable.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El D39B soporta comunicación por datos móviles y los comandos de ejemplo a continuación muestran la configuración estilo SMS/GPRS que usan muchos instaladores; siempre confirme la sintaxis y el comportamiento final con la documentación de Sentar y la versión de firmware de su dispositivo.

## Resumen de la configuración

El proceso de configuración prepara al D39B para enviar telemetría y actualizaciones de posición a Plaspy y para que el dispositivo sea visible en su cuenta Plaspy. Para este dispositivo el fabricante proporciona comandos SMS para ajustes básicos como destino del servidor, APN y intervalo de reporte. El objetivo es habilitar el acceso a la red, apuntar el dispositivo a Plaspy y verificar el reporte.

- Configure el APN y el acceso de datos para que el D39B pueda alcanzar el servidor Plaspy mediante datos móviles.
- Establezca el endpoint y puerto del servidor GPRS de Plaspy para que el dispositivo dirija la telemetría al servidor correcto.
- Seleccione el transporte (UDP o TCP) si el dispositivo exige una selección explícita; Plaspy soporta ambos.
- Aplique un intervalo regular de subida/reportes para que el dispositivo informe posición y estado con la cadencia deseada.
- Verifique el dispositivo mediante una consulta de estado y confirme que aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos usan el mismo puerto y la plataforma negocia los detalles del protocolo

Estos valores son el endpoint público de Plaspy que debe usar al configurar el D39B para que pueda reportar a Plaspy.

## Requisitos típicos antes de la configuración

- Un dispositivo D39B con batería y una tarjeta SIM activa que tenga datos habilitados para GPRS/4G
- Acceso a la interfaz de comandos SMS del dispositivo o a la herramienta de configuración del fabricante que soporte el D39B
- La contraseña por defecto del dispositivo (los ejemplos usan 123456 como contraseña)
- Conocimiento de los valores APN del operador móvil de la SIM instalada (nombre APN, usuario, contraseña)
- Una forma de confirmar el reporte del dispositivo en el servidor Plaspy tras la configuración (acceso a la cuenta Plaspy y lista de dispositivos)
- Familiaridad básica con la sintaxis de comandos SMS si va a configurar por SMS

## Cómo se conecta este rastreador a Plaspy

El D39B se configura para reportar posición y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy normalice y muestre los datos del rastreador junto con otros dispositivos. El comportamiento típico de conexión para este reloj sigue una ruta de datos GPRS/4G con subidas periódicas al servidor configurado.

- El dispositivo usa datos móviles para abrir una conexión al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos y detecta el protocolo automáticamente
- El reloj envía ubicación, estado y actualizaciones de eventos según el intervalo de subida configurado
- Plaspy recibe y normaliza la telemetría para que el dispositivo sea visible y manejable dentro de la plataforma
- La verificación se completa emitiendo un comando de comprobación de estado y confirmando que el dispositivo aparece en Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Sentar para el D39B (interfaz de comandos SMS o herramienta del fabricante) según la documentación de Sentar.
2. Configure los parámetros APN del dispositivo para que estén disponibles los datos móviles para comunicación GPRS/4G.
3. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor a 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración en el dispositivo y, si se indica, reinícielo para aplicar los cambios de red.
6. Valide que el D39B reporta a Plaspy usando el comando de estado del dispositivo y confirmando que el equipo aparece en su cuenta Plaspy.
7. Ajuste el intervalo de subida y pruebe reportes adicionales de eventos como SOS u otras alarmas según sea necesario.

## Comandos de configuración de ejemplo

Los ejemplos públicos de configuración del D39B usan mensajes SMS para establecer opciones comunes. Los comandos de ejemplo a continuación se presentan en el mismo orden que la documentación del fabricante. La contraseña de ejemplo mostrada es 123456 y es la predeterminada en estos ejemplos. Mantenga los marcadores de posición [apn], [apnu] y [apnp] cuando sustituya los valores de su operador.

- Restauración de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar IMSI o los valores MCC y MNC de la red
```text
pw,123456,imsi#
```

- Configurar el APN del operador donde xxx es MCC y yy es MNC (reemplazar los marcadores por los valores del operador)
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explicación: [apn] es el nombre del APN, [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Los caracteres finales xxxyy representan MCC y MNC según lo exige esta sintaxis de comando.

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto del servidor
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: Este comando se muestra tal como lo proporciona la documentación del dispositivo. Si su firmware espera un separador distinto u otro orden de parámetros, consulte la documentación de Sentar.

- Establecer el intervalo de subida a 300 segundos
```text
pw123456,upload,300#
```
Nota: Este comando proviene de los ejemplos públicos; algunas variantes de firmware esperan una coma después de la contraseña. Verifique la sintaxis exacta para la versión de firmware de su dispositivo.

- Verificar la configuración actual (comprobación)
```text
pw,123456,ts#
```

Si algún comando devuelve una respuesta inesperada, verifique el formato SMS exacto en la documentación de Sentar y confirme que está usando la contraseña correcta del dispositivo. Estos comandos son ejemplos públicos y deben aplicarse con precaución.

## Notas de configuración

- La configuración por SMS se muestra en los ejemplos públicos; algunos instaladores prefieren la herramienta del fabricante o un método de aprovisionamiento empresarial si está disponible para gestión masiva o remota.
- Las variaciones de firmware y las revisiones regionales del dispositivo pueden cambiar la sintaxis SMS y el orden de parámetros requerido; verifique el formato de comando según la versión de firmware.
- Elija UDP o TCP según su preferencia operativa; Plaspy soporta ambos transportes y detectará el protocolo automáticamente. Todos los dispositivos en Plaspy usan el puerto 8888.
- Confirme que los marcadores [apn], [apnu] y [apnp] se reemplazan por los valores del operador móvil y pruebe los datos móviles antes de apuntar el dispositivo a Plaspy.
- Si se utiliza una restauración de fábrica, considérela opcional y realícela sólo cuando sea necesario o cuando recupere un dispositivo a la configuración por defecto.

## Por qué usar Plaspy con esta configuración

Usar el Sentar D39B con Plaspy ofrece visibilidad unificada de dispositivos de seguridad personal junto con otras fuentes de telemetría. Configurar el D39B para que reporte al endpoint y puerto compartidos de Plaspy garantiza que los datos de ubicación, estado y eventos fluyan hacia una plataforma única para monitoreo, alertas y reportes consolidados.

Para saber más sobre Plaspy y cómo gestiona rastreadores compatibles visite https://www.plaspy.com. Para detalles actualizados sobre la configuración específica del dispositivo, el comportamiento del firmware y las instrucciones del fabricante, verifique la documentación vigente en el sitio de Sentar http://www.sentarsmart.com/ ya que los detalles pueden cambiar con el tiempo.
