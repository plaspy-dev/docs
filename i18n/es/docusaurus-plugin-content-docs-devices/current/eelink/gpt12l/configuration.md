---
slug: /eelink/gpt12l/configuration
id: gpt12l-configuration
sidebar_label: Configuration
title: EElink - GPT12‑L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink GPT12 L y su compatibilidad con Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración EElink GPT12 L
  - configuración GPT12 L Plaspy
  - configuración de servidor rastreador EElink
  - comandos SMS GPT12 L
  - integración rastreador GPS Plaspy
  - configuración plataforma GPS EElink
  - configuración APN GPT12 L
  - ajustes servidor Plaspy
  - configuración rastreador de activos
  - configuración seguimiento de flotas
---

# EElink - Configuración GPT12‑L

Esta página ofrece una guía pública para configurar el EElink GPT12‑L cuando se utiliza con Plaspy. Reúne los ajustes de servidor y los comandos SMS prácticos que comúnmente se emplean para apuntar un rastreador GPT12‑L a los endpoints de Plaspy y comprobar la conectividad. Utilice estas indicaciones como punto de partida para integrar el GPT12‑L en los paneles y reportes de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y la herramienta de configuración o el conjunto de comandos SMS que provea el proveedor. El GPT12‑L admite configuración remota mediante SMS, cuyos comandos se muestran en la sección Ejemplo de comandos de configuración más abajo.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el GPT12‑L para una comunicación fiable con Plaspy, confirmar que el equipo puede alcanzar los endpoints de Plaspy y activar el perfil de reporte que mejor se ajuste a sus necesidades de rastreo. En muchas instalaciones esto se realiza enviando comandos SMS de configuración o usando la herramienta del fabricante para establecer los parámetros de servidor y APN.

- Apuntar el dispositivo a los endpoints de servidor de Plaspy para que los mensajes de posición y eventos se entreguen de forma fiable.
- Configurar el APN del dispositivo para que el rastreador cuente con acceso de datos celulares para el envío al servidor.
- Seleccionar el transporte y los intervalos de reporte para equilibrar la frecuencia de actualizaciones con la duración de la batería.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy con posiciones en vivo y alertas de eventos.
- Utilizar los comandos SMS provistos o la herramienta de configuración del fabricante para aplicar los ajustes cuando el acceso físico al equipo sea limitado.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

Estos valores son los endpoints públicos de Plaspy que debe ingresar en el GPT12‑L ya sea mediante comandos SMS o a través de la herramienta de configuración del proveedor.

## Requisitos habituales antes de la configuración

- Un dispositivo GPT12‑L cargado y con acceso a la interfaz de comandos SMS o a la herramienta de configuración de EElink
- Una SIM celular activa con datos y SMS provisionada y el APN correcto del operador móvil
- Conocimiento de los valores APN correctos para su SIM, incluyendo usuario y contraseña si son necesarios
- Acceso a la documentación de instalador o administrador de EElink para comandos específicos del dispositivo y notas de firmware
- Una cuenta de Plaspy y familiaridad básica con la plataforma para verificar la visibilidad del dispositivo después de la configuración
- Un teléfono capaz de enviar comandos SMS al rastreador si planea configurar por SMS

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para reportar a Plaspy, el GPT12‑L envía posiciones GNSS, mensajes de evento y telemetría al endpoint de ingestión compartido de Plaspy y al puerto indicado. Plaspy procesa esos mensajes para ofrecer mapas en vivo, historial de rutas y alertas para monitoreo de flotas y activos.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Los datos se envían por UDP o TCP en el puerto 8888 según la configuración del dispositivo y la preferencia del instalador
- Plaspy recibe actualizaciones de posición, eventos de geocerca, estado de batería y telemetría operativa para visualización y alertas
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona para los dispositivos soportados
- Una vez activo el reporte, el dispositivo queda visible en Plaspy para monitoreo en tiempo real y reportes históricos

## Flujo típico de configuración

1. Acceda al método oficial de configuración de EElink para el GPT12‑L, como la interfaz de comandos SMS o el software de configuración documentado por el fabricante.
2. Configure el APN de su operador móvil usando el comando APN correspondiente o el campo de la herramienta. Use los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} si el formato del comando los requiere.
3. Ingrese el endpoint de servidor de Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita para el reporte al servidor.
5. Defina el intervalo de reporte y las reglas de eventos o geocercas que necesite, luego aplique o guarde la configuración.
6. Reinicie el dispositivo si el firmware o la herramienta lo solicita para aplicar los cambios.
7. Verifique que el GPT12‑L esté reportando a Plaspy y que aparezca en la plataforma con posiciones en vivo y los eventos esperados.

## Ejemplo de comandos de configuración

El GPT12‑L soporta configuración mediante SMS. Los siguientes comandos públicos por SMS son proporcionados por EElink para una configuración básica. Preserve los marcadores de posición al sustituir sus valores de APN y credenciales.

1. Restablecimiento de fábrica opcional para la configuración inicial o para borrar configuraciones anteriores
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
```
APN,{{apn}}# 
```
Si su APN requiere usuario y contraseña inclúyalos como campos adicionales separados por comas:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es el nombre del punto de acceso del operador móvil. {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN cuando se requiera.

4. Configurar el servidor GPRS apuntando a Plaspy por dominio
```
SERVER,1,d.plaspy.com,8888#
```

O configurar el servidor GPRS apuntando a Plaspy por IP
```
SERVER,0,54.85.159.138,8888#
```

5. Ajustar el intervalo de actualización de posición a 60 segundos
```
TIMER,60#
```

6. Consultar los parámetros actuales en el dispositivo
```
PARAM#
```

Use el comando de servidor por dominio o IP mostrado arriba. El dispositivo puede aceptar cualquiera de las dos formas. La selección de transporte para UDP o TCP puede manejarse de forma separada mediante la configuración del equipo o la herramienta de EElink según la versión de firmware.

## Notas de configuración

- La configuración por SMS es un método práctico y común para dispositivos remotos, aunque algunos instaladores prefieren el software o la herramienta de aprovisionamiento de EElink para despliegues masivos.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Siempre confirme los comandos con la documentación de EElink correspondiente al firmware de su dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y sus necesidades de monitoreo. Ambos transportes están soportados por Plaspy en el puerto 8888 y Plaspy detecta el protocolo automáticamente.
- Tenga las credenciales APN a la mano antes de intentar configurar el servidor GPRS. Parámetros APN ausentes o incorrectos son una causa frecuente de fallos de conectividad.
- Después de aplicar la configuración, espere unos minutos y verifique que el rastreador reporte a Plaspy usando la plataforma y el comando de verificación PARAM# si está utilizando SMS.

## Por qué usar Plaspy con esta configuración

Usar el GPT12‑L con Plaspy ofrece una vía directa para obtener visibilidad en tiempo real y datos históricos de rutas para flotas y activos de alto valor. La combinación de una buena autonomía de batería, perfiles de reporte flexibles y los endpoints de ingestión de Plaspy facilita equilibrar informes frecuentes cuando los activos están activos con modos de bajo consumo para despliegues a largo plazo.

Para obtener más información sobre la integración de dispositivos y la gestión del rastreo para flotas y activos, visite https://www.plaspy.com. Para comandos específicos del dispositivo, actualizaciones de firmware y la documentación de configuración más reciente del fabricante, verifique los detalles en el sitio oficial de EElink https://www.eelink.com.cn/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
