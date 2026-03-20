---
slug: /eelink/got08/configuration
id: got08-configuration
sidebar_label: Configuration
title: EElink - GOT08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink GOT08 y apuntarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración EElink GOT08
  - configuración GOT08 para Plaspy
  - configuración del servidor del rastreador EElink
  - configuración rastreador GPS GOT08
  - configuración OBD para Plaspy
  - comandos SMS GOT08
  - configuración telemetría vehicular
  - rastreo de flotas GOT08
  - configuración de dispositivo Plaspy
  - configuración servidor GPRS GOT08
---

# EElink - Configuración GOT08

Esta página documenta el contexto público de configuración para usar el EElink GOT08 con Plaspy. Se enfoca en los pasos prácticos y públicos necesarios para apuntar el GOT08 a los servidores de Plaspy, validar la conectividad y confirmar que el dispositivo reporta correctamente en la plataforma, usando los métodos de configuración proporcionados por el fabricante cuando estén disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran aquí son los comandos públicos publicados para la configuración del GOT08 y deben usarse como punto de partida práctico mientras usted verifica los detalles del dispositivo con la documentación de EElink.

## Resumen de la configuración

El proceso de configuración prepara el GOT08 para enviar ubicación y telemetría OBD a la plataforma Plaspy ajustando los endpoints de servidor, seleccionando el transporte y confirmando los reportes. En el GOT08 esto se hace comúnmente mediante comandos SMS enviados al dispositivo siguiendo la guía del fabricante.

- Apunte el dispositivo a los ajustes del servidor Plaspy para que los datos se entreguen a Plaspy para monitoreo y registro en tiempo real.
- Configure el APN y los valores de servidor GPRS para que el GOT08 pueda establecer conectividad de datos móviles.
- Defina los intervalos de reporte para controlar la frecuencia con la que posición y telemetría se envían a Plaspy.
- Valide que el rastreador sea visible en Plaspy y que reporte según lo esperado después de la configuración.
- Use los comandos SMS proporcionados por el fabricante para la configuración directa del dispositivo cuando estén disponibles y sea apropiado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Todos los dispositivos en Plaspy usan el mismo puerto 8888 y la plataforma intentará detectar el protocolo del dispositivo automáticamente cuando este se conecte.

## Requisitos típicos antes de la configuración

- El GOT08 debe estar instalado en el puerto OBD II del vehículo y alimentado por el vehículo según lo descrito por el fabricante.
- Una SIM celular válida con un plan de datos activo y la configuración de APN correcta para el operador móvil.
- Capacidad para enviar comandos SMS al dispositivo para aprovisionamiento si emplea el método de configuración por SMS.
- Acceso al IMEI del dispositivo o identificador para el aprovisionamiento y para verificar la unidad en Plaspy.
- Una cuenta de Plaspy y los pasos necesarios de registro del dispositivo en la plataforma Plaspy para mapear el equipo una vez que comience a reportar.
- Conocimiento confirmado de la versión de firmware o revisión del dispositivo cuando sea posible, ya que los comandos y el comportamiento pueden variar según el firmware.

## Cómo se conecta este rastreador a Plaspy

El GOT08 envía ubicación y la telemetría OBD disponible a través de la red móvil al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo está apuntando a Plaspy, la plataforma recibe la alimentación y visualizará la ubicación y los datos de telemetría del vehículo.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Los mensajes de telemetría y posición GPS se envían por GPRS al host de Plaspy.
- Plaspy recibe la conexión entrante en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- La frecuencia de reporte del dispositivo está controlada por los ajustes de temporizador del rastreador y determina con qué frecuencia aparecen los datos en Plaspy.
- La visibilidad en Plaspy permite monitoreo en tiempo real, alertas y reproducción histórica de viajes y telemetría.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial del fabricante. Para el GOT08 esto suele ser por SMS usando el conjunto de comandos publicados.
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o como la IP del servidor 54.85.159.138 en el comando de servidor del dispositivo.
3. Establezca el puerto en 8888 que utiliza Plaspy para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte al configurar el servidor.
5. Configure el APN para su operador móvil para que el dispositivo pueda usar datos GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el fabricante recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy verificando la conectividad del equipo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GOT08 puede configurarse enviando mensajes SMS con los siguientes comandos públicos en este orden. Preserve los marcadores de posición al reemplazarlos con los valores de su operador.

- Reinicio de fábrica opcional (usar solo si es necesario restaurar valores por defecto):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Establecer el APN del operador. Reemplace [apn] con el APN de su operador. Si su operador requiere un usuario o contraseña para el APN incluya los marcadores opcionales [apnu] y [apnp] en ese orden:
```text
APN,[apn]# 
```
o, si se requiere usuario y contraseña:
```text
APN,[apn],[apnu],[apnp]#
```
(Explicación de marcadores: [apn] es el nombre del punto de acceso de su proveedor celular. [apnu] y [apnp] son el usuario y la contraseña opcionales del APN.)

- Establecer el servidor GPRS para usar el dominio de Plaspy en el puerto 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS para usar la IP del servidor Plaspy en el puerto 8888:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte cada 60 segundos:
```text
TIMER,60#
```

- Verificar la configuración de parámetros:
```text
PARAM#
```

Envíe cada comando como un mensaje SMS separado al número telefónico del dispositivo. Mantenga el orden cuando la guía del fabricante requiera una secuencia.

## Notas de configuración

- El aprovisionamiento por SMS es un método común para dispositivos GOT08; confirme que el dispositivo puede recibir SMS y que la SIM tiene mensajes habilitados.
- Las variantes de firmware y regionales pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; verifique los comandos según las notas del firmware del dispositivo.
- Elija UDP o TCP de acuerdo con la recomendación del fabricante; Plaspy acepta ambos y detectará el protocolo automáticamente cuando el dispositivo se conecte.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que no necesita un puerto único por dispositivo.
- Al usar el comando SERVER puede apuntar el dispositivo tanto a d.plaspy.com como a la IP 54.85.159.138 como opciones públicas para conectividad con Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GOT08 con Plaspy ofrece una vía sencilla para la visibilidad de flotas al combinar un dispositivo OBD plug and play con el seguimiento en tiempo real, alertas e informes de Plaspy. El GOT08 entrega telemetría extraída del OBD y la posición GPS a Plaspy para que los operadores puedan monitorear la salud del vehículo, los viajes y la ubicación desde una plataforma centralizada.

Para saber más sobre Plaspy y cómo la plataforma puede funcionar con dispositivos como el GOT08 visite https://www.plaspy.com. Para los comandos específicos más actuales, comportamiento del firmware e instrucciones del fabricante, verifique los detalles en el sitio de EElink https://www.eelink.com.cn/ ya que los pasos de configuración y la sintaxis de comandos pueden cambiar con el tiempo.
