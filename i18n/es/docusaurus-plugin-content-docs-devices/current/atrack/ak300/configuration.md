---
slug: /atrack/ak300/configuration
id: ak300-configuration
sidebar_label: Configuration
title: ATrack - AK300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ATrack AK300 con ajustes de servidor Plaspy y ejemplos de comandos
keywords:
  - Configuración ATrack AK300
  - Configuración AK300 Plaspy
  - Configuración de servidor ATrack AK300
  - Configuración rastreador GPS AK300
  - Configuración dispositivo Plaspy
  - Rastreo de flotas AK300
  - Ajustes GPRS AK300
  - Comandos ATrack AK300
  - Rastreador vehicular AK300
  - Configuración telemetría AK300
---

# ATrack - Configuración del AK300

Esta página describe el contexto público de configuración para usar el ATrack AK300 con Plaspy. Reúne los ajustes esenciales del servidor Plaspy, los requisitos habituales, un flujo de trabajo práctico de configuración y comandos de estilo AT de ejemplo que suelen emplearse con el firmware del AK300 para apuntar el dispositivo a Plaspy. Use esta guía como referencia práctica al preparar el rastreador para integrarlo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AK300 acepta con frecuencia comandos de configuración estilo AT o herramientas de configuración del proveedor; donde hay comandos públicos disponibles se muestran más abajo para su conveniencia y verificación.

## Resumen de la configuración

Este proceso prepara el AK300 para comunicarse de forma fiable con Plaspy y que los datos de ubicación, telemetría y eventos se visualicen en la plataforma. Los comandos públicos facilitados por el fabricante configuran la notificación de entradas, el intervalo de reporte, el formato de datos y los ajustes GPRS del servidor necesarios para enviar la información a Plaspy.

- Configure el reporte de entradas y eventos del dispositivo para que el rastreador envíe eventos de ACC y entradas digitales a Plaspy.
- Establezca el intervalo de seguimiento periódico para controlar la frecuencia con la que el AK300 informa su posición a la plataforma.
- Defina el formato de datos del dispositivo (ejemplo en modo binario) para que coincida con lo que Plaspy espera si el firmware lo requiere.
- Configure GPRS/APN y el host del servidor para que el AK300 abra una conexión con Plaspy en el endpoint y puerto compartidos.
- Verifique el estado del dispositivo con una consulta de información incorporada para confirmar conectividad y ajustes aplicados.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones de dispositivo

## Requisitos típicos antes de la configuración

- Una unidad AK300 alimentada y accesible con acceso de instalador al interfaz de configuración.
- Una tarjeta SIM válida y un plan de datos con los ajustes APN correctos para la región y el operador.
- Acceso al método o software oficial de configuración ATrack, o un método para enviar comandos estilo AT (serial, USB, SMS o herramienta del proveedor) según lo soporte la unidad.
- Conocimientos de cableado del vehículo y de la entrada de ignición si ACC u otras entradas se van a usar para el reporte de eventos.
- Acceso a una cuenta Plaspy o credenciales para validar que el dispositivo aparece y reporta correctamente después de la configuración.
- Confirmación de la versión de firmware actual y notas de la versión del fabricante si están disponibles.

## Cómo este rastreador se conecta a Plaspy

El AK300 se configura para enviar posiciones GPS, telemetría y mensajes por eventos a Plaspy usando el endpoint y el puerto compartidos del servidor. Los datos se transmiten por transporte IP estándar (UDP o TCP) al servidor Plaspy y luego se procesan y muestran en la plataforma.

- El dispositivo abre una sesión de datos GPRS usando el APN configurado y se conecta al host y puerto del servidor Plaspy.
- Los paquetes de posición y telemetría se transmiten a 54.85.159.138 en el puerto 8888 (o a d.plaspy.com cuando el firmware lo soporta).
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo específico en la plataforma.
- El reporte de eventos, como encendido/apagado de ACC o cambios en entradas digitales, se envía según la configuración para que Plaspy pueda generar alertas y registros de viaje.
- Usar el mismo puerto para todos los dispositivos simplifica la configuración de firewall y red para las flotas.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración ATrack o a la herramienta del proveedor para el AK300 (consola serial, USB, SMS o software de configuración ATrack).
2. Introduzca el host del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el puerto 8888 para todos los dispositivos).
4. Seleccione el protocolo de transporte UDP o TCP en el dispositivo si el firmware lo requiere.
5. Aplique o guarde la configuración y, si es necesario, envíe los comandos AT requeridos para habilitar el reporte y fijar los intervalos.
6. Reinicie el dispositivo si el fabricante o la herramienta de configuración lo recomienda para aplicar los cambios.
7. Valide que el AK300 reporte a Plaspy verificando el estado del dispositivo en la plataforma y usando el comando de consulta de información mostrado más abajo.

## Comandos de configuración de ejemplo

Los siguientes comandos estilo AT son los comandos públicos proporcionados para la configuración del AK300. Los comandos se muestran en el orden en que comúnmente se aplican. Envíelos mediante la herramienta de configuración oficial, una consola serial u otro método soportado por el fabricante. Reemplace los marcadores de posición por los valores de su operador donde se indique.

- Habilitar reporte de eventos ACC y reportes relacionados de entradas

```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer el intervalo de seguimiento periódico a 60 segundos

```
AT$TRAC=1,60,,,,,2
```

- Poner el dispositivo en ejemplo de formato de datos binario

```
AT$FORM=1,@P,0,""
```

- Configurar GPRS y ajustes del servidor Plaspy
  - Reemplace [apn] con el APN de su operador
  - Reemplace [apnu] con el usuario del APN si su operador lo requiere
  - Reemplace [apnp] con la contraseña del APN si su operador lo requiere

```
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```

- Consultar estado del dispositivo y verificar ajustes aplicados

```
AT$INFO=?
```

Notas sobre estos comandos
- El comando GPRS anterior utiliza la IP del servidor Plaspy tal como se indica en las instrucciones públicas. Si su herramienta de configuración acepta un nombre de host, también puede usar d.plaspy.com cuando el firmware del dispositivo lo soporte.
- Los marcadores [apn], [apnu] y [apnp] representan el APN del operador móvil, el usuario del APN y la contraseña del APN respectivamente. Complételos con los valores proporcionados por su proveedor de SIM.

## Notas de configuración

- Las diferencias de firmware entre las revisiones de hardware del AK300 pueden cambiar comandos disponibles, el orden de parámetros o las opciones soportadas; confirme siempre con las notas de la versión del firmware.
- Al elegir el transporte, UDP es habitual por su menor sobrecarga mientras que TCP ofrece mayor fiabilidad de conexión; Plaspy acepta ambos y realiza detección automática del protocolo.
- Los comandos de ejemplo muestran formato binario; otros formatos o modos de protocolo pueden estar disponibles según el firmware y deben coincidir con lo que Plaspy espera.
- Si el dispositivo soporta configuración vía SMS como canal alterno, siga la sintaxis SMS del fabricante o utilice la herramienta del proveedor para despliegues masivos.
- Documente siempre los cambios aplicados y pruebe una sola unidad antes de desplegar la configuración en toda la flota.

## Por qué usar Plaspy con esta configuración

Usar el AK300 con Plaspy ofrece a los operadores de flotas visibilidad consolidada de vehículos, eventos y datos de telemetría en una sola plataforma. Las capacidades de entradas y telemetría del AK300, combinadas con la detección automática de protocolos y el endpoint unificado de Plaspy, permiten al equipo monitorear viajes, detectar eventos como encendido/apagado de ignición y actuar sobre alertas para mejorar la seguridad y la eficiencia operativa.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos como el AK300 visite https://www.plaspy.com. Para obtener los detalles más actuales sobre configuración específica del dispositivo, comportamiento del firmware y sintaxis de comandos, verifique siempre la documentación del fabricante en https://www.atrack.com.tw/ ya que los métodos y el firmware pueden cambiar con el tiempo.
