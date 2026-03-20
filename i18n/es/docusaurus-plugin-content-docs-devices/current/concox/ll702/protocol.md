---
slug: /concox/ll702/protocol
id: ll702-protocol
sidebar_label: Protocol
title: Concox - LL702 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador Concox LL702 con Plaspy usando ajustes de conexión compartidos
keywords:
  - Concox LL702
  - Protocolo rastreador LL702
  - Concox LL702 Plaspy
  - Protocolo de comunicación LL702
  - Protocolo de seguimiento LL702
  - Protocolo rastreador Concox
  - Compatibilidad rastreador GPS Plaspy
  - Rastreador de activos LL702
  - Informe de telemetría LL702
  - Seguimiento de flotas Concox
---

# Concox - Protocolo LL702

Esta página describe el contexto público del protocolo para usar el rastreador Concox LL702 con Plaspy. Resume cómo el dispositivo se comunica con Plaspy, el papel que desempeña el protocolo de reporte para entregar datos de ubicación y eventos utilizables, y qué ajustes de conexión son compartidos entre los dispositivos soportados por Plaspy. Está pensada como una visión general del protocolo y no sustituye la documentación del fabricante.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el LL702 puede variar según la versión del firmware, la revisión del hardware y la implementación del fabricante, por lo que la configuración final y los casos límite deben verificarse con la documentación de Concox y las notas de versión del firmware.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que el LL702 utiliza para enviar actualizaciones de ubicación, alertas y telemetría a un servidor remoto como Plaspy. En la práctica, el protocolo determina cómo el dispositivo se identifica, cómo se informan los eventos y qué mensajes necesita interpretar Plaspy para conocer el estado y la ubicación del dispositivo.

- Permite al LL702 enviar posiciones, estado GNSS multifuente y indicadores de eventos a Plaspy para su representación en mapas y para generar alertas.
- Transporta información auxiliar de eventos como manipulación, batería baja, transiciones de geocerca y alertas por vibración o caída que Plaspy muestra a los usuarios.
- Proporciona identificadores y contexto de sesión para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correcto.
- Permite que el LL702 almacene datos localmente durante cortes y suba las posiciones en cola cuando se restablece la conexión.
- Sirve como contrato entre el comportamiento del dispositivo y el análisis de Plaspy para que la telemetría aparezca correctamente en las líneas de tiempo y los reportes de seguimiento.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y usa detección automática para asociar los mensajes entrantes con un perfil de comportamiento conocido del rastreador. Cuando un LL702 está configurado para reportar a Plaspy, por lo general no es necesario seleccionar un protocolo manualmente dentro de la plataforma si el dispositivo apunta correctamente al endpoint de Plaspy.

- El endpoint de reporte de Plaspy es accesible en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto compartido 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo y las reglas de red.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante una vez que el dispositivo reporta al endpoint.
- En la mayoría de los despliegues, el dispositivo debe estar configurado para enviar sus reportes salientes al host de Plaspy para que la detección y la asociación ocurran sin selección manual de protocolo.
- Si un dispositivo no aparece, verifique el destino de reporte del equipo, la configuración de transporte y que la SIM y el APN permitan conexiones salientes.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el LL702 alcanza los servidores de Plaspy y qué transportes puede usar el dispositivo en campo. El LL702 soporta reporte por celular con comportamientos de conmutación para mantener la conectividad según la cobertura.

- El LL702 puede configurarse para usar transporte UDP o TCP y enviar reportes a Plaspy en el puerto 8888 dependiendo del soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 como servidor destino para los reportes.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, de modo que las reglas de firewall y NAT pueden simplificarse permitiendo tráfico saliente hacia ese puerto.
- Elija UDP cuando el dispositivo o la red requieran un transporte ligero, o TCP cuando se prefiera fiabilidad de sesión siempre que el dispositivo lo soporte.
- El comportamiento celular, como la conmutación entre LTE Cat 1 y 2G, depende del firmware de la unidad y de las condiciones de la red y no altera el endpoint compartido de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware y los lotes de hardware pueden cambiar el tiempo de los mensajes, campos opcionales o el comportamiento de eventos; verifique la compatibilidad tras actualizar el firmware.
- Las opciones de configuración del fabricante pueden permitir seleccionar UDP o TCP y el host de destino; asegúrese de que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La capacidad de posicionamiento multifuente y el reporte de eventos del LL702 dependen de los sensores habilitados y de los modos de funcionamiento configurados en el firmware del dispositivo.
- Las condiciones de la red y la configuración del APN de la SIM afectan la capacidad del dispositivo para alcanzar Plaspy; confirme que la SIM y el APN permitan conexiones IP o a dominios salientes.
- Al integrar muchos dispositivos, use un grupo piloto pequeño para confirmar el comportamiento antes de un despliegue masivo y detectar diferencias específicas de modelo.
- Consulte la documentación oficial de Concox para pasos de configuración por modelo y notas de firmware para validar el comportamiento en su implementación.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que los mensajes del dispositivo lleguen a Plaspy de forma que favorezca ubicaciones precisas, alertas oportunas y uso eficiente de datos. Aunque la plataforma detecte el protocolo automáticamente, conocer el comportamiento esperado del dispositivo reduce la fricción en la configuración y acelera la resolución de problemas.

- Ayuda a diagnosticar por qué faltan actualizaciones de posición o eventos al centrar la investigación en el transporte, el destino de reporte y el modo de funcionamiento.
- Informa decisiones sobre modos de ahorro de energía frente a la cadencia de reporte para equilibrar la autonomía de la batería y la visibilidad en tiempo real.
- Aclara cómo deben aparecer en Plaspy los eventos de los sensores, como manipulación o vibración, y qué ajustes del dispositivo los controlan.
- Guía la configuración de red y las reglas de firewall al conocer el host y puerto de destino requeridos para el tráfico saliente.
- Facilita la planificación de despliegues a gran escala al anticipar variaciones de firmware y necesidades de prueba.

## Por qué usar Plaspy con este protocolo

Al combinarse con Plaspy, la larga autonomía en espera del LL702, su posicionamiento multifuente y su conjunto de eventos ofrecen una base práctica para monitoreo de activos, flujos de trabajo antirrobo y supervisión de flotas. Plaspy ingiere los mensajes de ubicación y eventos del LL702 y los presenta en paneles, alertas e informes históricos para apoyar decisiones operativas.

El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de configuración en despliegues grandes mientras permiten exponer la telemetría y las alertas del LL702. Para saber más sobre Plaspy y cómo se puede usar con dispositivos como el Concox LL702 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento del firmware y notas de implementación consulte al fabricante en https://www.iconcox.com/ ya que estos aspectos pueden cambiar con el tiempo.
