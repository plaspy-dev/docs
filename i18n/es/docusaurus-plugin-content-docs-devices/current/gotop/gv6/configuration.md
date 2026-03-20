---
slug: /gotop/gv6/configuration
id: gv6-configuration
sidebar_label: Configuration
title: GOTOP - GV6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP GV6 y conectarlo a Plaspy con los ajustes de servidor necesarios
keywords:
  - configuración GOTOP GV6
  - instalación GOTOP GV6
  - configuración GV6 Plaspy
  - configuración de servidor GV6
  - configuración rastreador GPS GOTOP
  - configuración plataforma seguimiento GV6
  - configuración rastreador de activos GOTOP
  - configuración rastreador Plaspy
  - configuración seguimiento de flotas GV6
  - integración GOTOP GV6
---

# GOTOP - Configuración GV6

Esta página documenta el contexto público de configuración para utilizar el rastreador 4G de activos GOTOP GV6 con la plataforma Plaspy. Se centra en los ajustes prácticos de servidor y en el flujo de trabajo necesario para apuntar un GV6 hacia Plaspy, de modo que el dispositivo entregue datos de ubicación y eventos al cloud de Plaspy para monitoreo e informes.

Plaspy utiliza ajustes compartidos de servidor para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del GV6, la revisión de hardware, el tipo de instalación y el método de configuración que utilice (SMS, software local o aprovisionamiento en la nube). Consulte la documentación del fabricante para detalles específicos del dispositivo mientras usa los ajustes de servidor y el flujo de trabajo que se describen a continuación para integrar con Plaspy.

## Resumen de la configuración

Este proceso prepara al GV6 para comunicarse de forma fiable con el back end de Plaspy para que la ubicación, las alarmas y la telemetría aparezcan en su cuenta de Plaspy. Los pasos se concentran en establecer el endpoint de servidor correcto, elegir el transporte y validar la conectividad desde el activo hasta la plataforma.

- Apunte el GV6 al dominio o IP del servidor Plaspy para que enrute la telemetría a Plaspy.
- Configure el puerto del dispositivo al puerto que usa Plaspy para todos los dispositivos para asegurar una ingesta consistente.
- Seleccione UDP o TCP en el GV6 si el dispositivo requiere elegir el transporte.
- Aplique y guarde la configuración y reinicie el rastreador cuando el dispositivo lo requiera.
- Valide en Plaspy que el GV6 se ha conectado y está reportando ubicación y eventos.
- Mantenga el firmware del fabricante y los pasos de configuración sincronizados con la guía del usuario del GV6.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que el GV6 también debe configurarse para usar el puerto 8888 al reportar a Plaspy.

## Requisitos habituales antes de la configuración

- Una unidad GV6 con batería cargada o alimentación externa conectada.
- Una SIM celular activa con datos habilitados y APN correcto configurado para el operador móvil instalado.
- Acceso al método oficial de configuración GOTOP para el GV6, como comandos SMS, herramienta de aprovisionamiento del fabricante o portal de configuración en la nube.
- El IMEI del dispositivo GV6 o su identificador único para vincular el dispositivo con los registros de su flota en Plaspy.
- Documentación del fabricante y cualquier nota de firmware del GV6 para la variante que va a desplegar.
- Herramientas para reiniciar o ciclar la alimentación del dispositivo después de aplicar ajustes si es necesario.

## Cómo se conecta este rastreador a Plaspy

El GV6 envía posiciones, telemetría y eventos de alarma a través de la red celular al endpoint de recolección de Plaspy. Cuando se configura para apuntar a Plaspy usando el dominio o la IP y el puerto correctos, Plaspy maneja automáticamente los datos entrantes, detecta el protocolo del rastreador e ingiere los eventos para mapas, alertas e informes.

- Configure el GV6 para reportar a d.plaspy.com o a 54.85.159.138 según prefiera el método de configuración.
- Asegúrese de que el puerto del dispositivo esté establecido en 8888 porque Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Elija UDP o TCP como transporte si el GV6 requiere opción de transporte; Plaspy acepta ambos.
- Tras la conexión, Plaspy detectará automáticamente el protocolo GV6 y comenzará a procesar los mensajes entrantes.
- Las alarmas, como extracción/caída y alertas contra estaciones base falsas, se remitirán a Plaspy como eventos para notificación inmediata y registro.

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP GV6 o al software proporcionado por el fabricante.
2. En el campo de dirección del servidor ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP y guarde la selección.
5. Aplique o guarde los cambios de configuración usando la herramienta de configuración del GV6 o comandos SMS.
6. Reinicie o corte la alimentación del GV6 si el dispositivo o el firmware requieren un reinicio para que los ajustes entren en vigor.
7. Valide que el GV6 reporte a Plaspy revisando la actividad del dispositivo en la plataforma Plaspy y confirmando que se reciben mensajes de ubicación o eventos.

## Ejemplos de comandos de configuración

El GV6 soporta la configuración remota de parámetros vía SMS y aprovisionamiento desde la plataforma en la nube según la documentación del fabricante. La sintaxis exacta de los comandos SMS y las órdenes de las herramientas varían según el firmware y la región, así que siga la referencia oficial de comandos GOTOP para su variante GV6.

Si usa SMS para la configuración, la orientación pública típica se ve en concepto así (reemplace los marcadores por sus valores específicos y confirme la sintaxis exacta con la documentación de GOTOP):

- Establecer servidor por dominio ejemplo (sintaxis de marcador)
```
SERVER d.plaspy.com,8888
```

- Establecer servidor por IP ejemplo (sintaxis de marcador)
```
SERVER 54.85.159.138,8888
```

- Elegir transporte ejemplo (sintaxis de marcador)
```
SET TRANSPORT UDP
```

- Guardar y reiniciar ejemplo (sintaxis de marcador)
```
SAVE
REBOOT
```

Nota: La sintaxis exacta de los SMS o comandos, las palabras clave y la autenticación requerida dependerán del firmware del GOTOP GV6. Estos ejemplos son conceptuales y deben adaptarse al conjunto de comandos oficial del GV6 proporcionado por GOTOP.

## Notas de configuración

- Las versiones de firmware del GV6 y las variantes regionales de hardware pueden cambiar la sintaxis de los comandos y las funciones soportadas; siempre verifique la documentación GOTOP para su firmware específico.
- Cuando haya opción, UDP suele usarse por su menor overhead para telemetría, mientras que TCP se puede seleccionar para dispositivos que requieran mayor fiabilidad de conexión; pruebe ambos si no está seguro.
- La configuración por SMS y el aprovisionamiento en la nube aparecen en los materiales de GOTOP; elija el método que soporte su despliegue y las restricciones del operador.
- Confirme el APN y los ajustes del operador móvil en la SIM antes de configurar el endpoint de Plaspy para que el dispositivo tenga una ruta de datos activa.
- Debido a que Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta los protocolos automáticamente, concéntrese en establecer correctamente la dirección del servidor y el transporte en el GV6.

## Por qué usar Plaspy con esta configuración

Integrar el GOTOP GV6 con Plaspy brinda a los equipos visibilidad consistente sobre la ubicación de activos, eventos de alarma y flujos de telemetría mediante un modelo de configuración sencillo. El hardware GV6 está diseñado para despliegues de larga duración y posicionamiento multimodal, mientras que Plaspy proporciona la ingestión y el procesamiento en la nube para que usted pueda monitorear rutas, responder alertas y analizar datos históricos.

Para obtener más información sobre Plaspy y cómo la plataforma maneja la ingestión de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Para las instrucciones más recientes específicas por dispositivo, sintaxis de comandos e información de firmware consulte el sitio oficial de GOTOP https://www.gotop.cc/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
