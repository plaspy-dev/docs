---
slug: /haicom/hi_603/configuration
id: hi_603-configuration
sidebar_label: Configuration
title: Haicom - HI-603 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Haicom HI-603 e integrarlo con Plaspy para reportes en tiempo real
keywords:
  - Configuración Haicom HI-603
  - Configuración HI-603 Plaspy
  - Configuración rastreador Haicom
  - Configuración GPRS HI-603
  - Configuración GPS HI-603
  - Configuración servidor Plaspy
  - Configuración seguimiento vehicular
  - Seguimiento de flotas HI-603
  - Configuración SMS HI-603
  - Guía instalación HI-603
---

# Haicom - Configuración HI-603

Esta página describe el contexto público de configuración para usar el rastreador Haicom HI-603 con Plaspy. Reúne las opciones de servidor y el flujo de configuración habitual necesarios para apuntar el HI-603 a la plataforma Plaspy y habilitar el reporte en tiempo real. Cuando los comandos del fabricante son públicos se incluyen a continuación para ayudarle en la configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe revisar la documentación del equipo y las indicaciones del fabricante antes de realizar cambios.

## Resumen de la configuración

La configuración prepara al HI-603 para enviar datos de ubicación y eventos por GPRS a la plataforma Plaspy. En modelos HI-603 esto normalmente implica configurar el APN de la tarjeta SIM, programar el dispositivo para usar el endpoint del servidor Plaspy, seleccionar el tipo de transporte si procede y ajustar los intervalos de reporte. Los comandos públicos de ejemplo que siguen se envían vía SMS y usan la contraseña por defecto que aparece en los ejemplos.

- Programar el APN del equipo para que pueda conectarse a datos móviles y reportar por GPRS.
- Indicar la dirección del servidor GPRS de Plaspy para que el rastreador envíe telemetría al endpoint correcto.
- Seleccionar el protocolo de transporte (UDP o TCP) y confirmar que el equipo usa los puertos de Plaspy.
- Configurar los intervalos de reporte o latido para que Plaspy reciba actualizaciones consistentes.
- Validar la conectividad confirmando que el dispositivo aparece en la plataforma Plaspy y envía datos según lo esperado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP según preferencia del dispositivo o compatibilidad de firmware  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto para todos los dispositivos en la plataforma

## Requisitos típicos antes de la configuración

- Una unidad HI-603 con alimentación y una SIM activa que soporte datos GPRS y SMS.  
- Acceso al método de configuración del fabricante para el HI-603, como comandos SMS o software del proveedor.  
- La contraseña por defecto del dispositivo si la secuencia de comandos la requiere; los ejemplos públicos usan la contraseña 0000.  
- Credenciales APN del operador de la SIM para habilitar datos GPRS. Use los marcadores de posición [apn], [apnu], [apnp] donde corresponda.  
- Una cuenta en Plaspy y acceso a la plataforma para verificar el reporte del dispositivo después de la configuración.  
- Herramientas básicas para probar el envío de comandos SMS y reiniciar el equipo si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para reporte vía GPRS, el HI-603 inicia una conexión de datos al endpoint compartido de Plaspy en el puerto indicado para que el dispositivo entregue ubicación y eventos a la plataforma. Plaspy decodifica automáticamente el protocolo entrante y muestra el dispositivo en la plataforma.

- El rastreador usa GPRS para abrir una sesión de datos y conectarse a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El equipo envía actualizaciones de posición periódicas de acuerdo con el intervalo de reporte configurado.  
- Eventos como SOS, activaciones de geocerca o alertas de velocidad se reenvían a Plaspy para gestión de alarmas y visibilidad.  
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador, por lo que no se requiere asignación de puertos por dispositivo.  
- La plataforma facilita la monitorización operativa y la visibilidad una vez que el equipo reporta correctamente al endpoint compartido de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Haicom para el HI-603, normalmente la interfaz por comandos SMS o la herramienta de configuración del proveedor.  
2. Ingrese los ajustes de APN del operador usando los marcadores de posición adecuados para su SIM.  
3. Configure d.plaspy.com o 54.85.159.138 como la dirección del servidor GPRS en los ajustes del equipo.  
4. Establezca el puerto 8888 en el dispositivo y asegúrese de que el equipo use el mismo puerto que Plaspy.  
5. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.  
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo necesita un reinicio para activar los cambios.  
7. Valide que el dispositivo reporta a Plaspy comprobando la presencia del equipo y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El HI-603 se puede configurar enviando comandos por SMS. Los comandos de ejemplo públicos que siguen usan la contraseña por defecto del dispositivo 0000. Preserve el orden cuando sea importante para su instalación y reemplace los marcadores por los valores del operador.

- Nota sobre los marcadores de posición  
  - [apn] es el nombre del APN del operador móvil.  
  - [apnu] es el usuario del APN si el operador lo requiere.  
  - [apnp] es la contraseña del APN si el operador lo requiere.

1) Configurar el APN del operador
```
#0000,200,[apn],[apnu],[apnp]
```

2) Configurar el servidor GPRS a Plaspy por IP y puerto
```
#0000,210,54.85.159.138,8888,8888,8888,0
```

3) Establecer el intervalo de actualización a 60 segundos
```
#0000,250,0,60,0,0,0,0,0,0
```

Envíe cada comando SMS desde un número autorizado según lo descrito en la documentación de Haicom. La contraseña 0000 en estos ejemplos es el valor de fábrica mostrado en el conjunto público de comandos. Reemplácela si su dispositivo usa otra contraseña.

## Notas sobre la configuración

- El HI-603 admite configuración vía SMS y también mediante software del proveedor; siga las instrucciones de Haicom para el método que utilice.  
- Tenga a mano las credenciales APN y sustituya los marcadores por los valores del operador antes de enviar los comandos.  
- Al elegir entre UDP y TCP, considere la fiabilidad de la red y si su operador bloquea ciertos tipos de transporte. Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Todos los dispositivos en Plaspy usan el mismo puerto, así que utilice el puerto 8888 al configurar el rastreador.  
- Las revisiones de firmware y las variantes de hardware pueden cambiar el formato de los comandos o los valores por defecto; verifique los comandos con la documentación actual de Haicom.

## Por qué usar Plaspy con esta configuración

Usar el Haicom HI-603 con Plaspy ofrece una vía sencilla para obtener visibilidad de ubicación en tiempo real y monitoreo de eventos para vehículos y activos. Al apuntar el dispositivo al endpoint compartido de Plaspy y emplear el puerto y las opciones de transporte estándar, las organizaciones pueden centralizar los datos de seguimiento, supervisar alertas e integrar flujos operativos con una plataforma que detecta automáticamente los protocolos de los dispositivos.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para las instrucciones específicas del modelo, notas de firmware y detalles de soporte del fabricante, confirme la documentación actual en http://www.haicom.com.tw/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
