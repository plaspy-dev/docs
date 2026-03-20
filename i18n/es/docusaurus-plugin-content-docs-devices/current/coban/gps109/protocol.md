---
slug: /coban/gps109/protocol
id: gps109-protocol
sidebar_label: Protocol
title: Coban - GPS109 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Coban GPS109 y cómo el dispositivo comunica ubicación y alertas a Plaspy
keywords:
  - protocolo Coban GPS109
  - comunicación Coban GPS109
  - protocolo rastreador GPS109
  - rastreador Coban Plaspy
  - protocolo rastreo Plaspy
  - protocolo seguimiento vehicular Coban
  - compatibilidad GPS109 Plaspy
  - protocolo GPRS Coban
  - protocolo reporte GPS109
  - seguimiento de flotas Coban GPS109
---

# Coban - Protocolo GPS109

Esta página ofrece una visión pública del protocolo para usar el rastreador Coban GPS109 con Plaspy. Explica el contexto general de comunicación que permite al GPS109 informar ubicación, estado y alarmas a una plataforma de gestión de flotas. La descripción se basa en las características del GPS109, como conectividad GSM GPRS, GPS de alta sensibilidad, gran autonomía de batería y carcasa IP67, para enmarcar cómo suele comunicarse el dispositivo en servicio.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, las condiciones de red y la implementación del fabricante, por lo que la información aquí es una guía de alto nivel para integración y resolución de problemas, no una referencia específica de firmware.

## Resumen del protocolo

El protocolo del GPS109 es el mecanismo mediante el cual el dispositivo envía posiciones GPS, mensajes de estado, alarmas y respuestas de configuración a un servidor. Para la integración con Plaspy, el protocolo determina cómo se identifica el rastreador, cómo se empaqueta la telemetría para su transporte por la red celular y qué mensajes considera la plataforma como procesables.

- Permite que el rastreador informe posiciones y el estado de movimiento a un servidor remoto
- Transporta eventos de alarma y estado como batería baja, exceso de velocidad, geocerca y notificaciones de impacto
- Incluye información de identificación o autenticación para que el servidor asocie los reportes a un equipo concreto
- Habilita la configuración remota cuando el rastreador soporta configuración por GPRS o comandos SMS
- Proporciona telemetría periódica para visibilidad de la flota y registro histórico de ubicaciones

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en el endpoint compartido y determina automáticamente el protocolo del rastreador a partir del tráfico entrante e identificadores del equipo. En la mayoría de los casos, un GPS109 correctamente configurado que reporte al endpoint de Plaspy será manejado sin que el usuario deba seleccionar manualmente el protocolo.

- El endpoint del servidor Plaspy es accesible en d.plaspy.com y en la IP 54.85.159.138
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y usa el mismo puerto para todos los equipos soportados
- Los dispositivos apuntados al endpoint de Plaspy son detectados automáticamente y asociados con la lógica de manejo adecuada
- Normalmente los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo reporta correctamente a d.plaspy.com en el puerto configurado
- La detección cubre diferencias comunes entre rastreadores, pero no sustituye verificar las especificaciones del firmware del dispositivo

## Transporte y contexto de conexión

El transporte y direccionamiento de la conexión son clave para que el GPS109 informe correctamente a Plaspy. El GPS109 puede operar sobre la red GSM GPRS y configurarse para usar UDP o TCP según los ajustes del dispositivo y los requisitos del servidor.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar al servidor
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos, lo que simplifica la configuración de red
- Los equipos pueden apuntar sus reportes al dominio d.plaspy.com o a la dirección numérica 54.85.159.138
- La selección de UDP o TCP en el dispositivo debe coincidir con las características de red y del operador para asegurar una entrega confiable
- Firewalls y ajustes de APN deben permitir conexiones salientes desde el rastreador hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden implementar características del protocolo de manera distinta; verifique el comportamiento frente al firmware que tenga en mano
- Algunas unidades GPS109 ofrecen modos de configuración por SMS y por GPRS; elija el transporte que se ajuste a sus requisitos operativos
- Los ajustes del fabricante, como dirección del servidor, puerto y transporte, deben establecerse en el dispositivo para apuntar a Plaspy y lograr manejo automático
- Plaspy detecta automáticamente los protocolos de los rastreadores, pero el reporte preciso depende de la correcta configuración del dispositivo y del comportamiento del firmware vigente
- Las condiciones de la red y la configuración de la SIM/APN pueden influir en si UDP o TCP es más fiable para un despliegue determinado
- Valide siempre el comportamiento del dispositivo en una prueba controlada antes de un despliegue masivo

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del GPS109 ayuda a garantizar que los dispositivos estén configurados correctamente, que los eventos esperados lleguen a Plaspy y que la resolución de problemas sea más eficiente cuando ocurran incidencias. Conocer cómo el rastreador reporta datos y cómo Plaspy los recibe reduce el tiempo de integración y mejora la confiabilidad a largo plazo.

- Facilita verificar que el dispositivo apunta al endpoint de Plaspy y usa el transporte correcto
- Hace más sencillo diagnosticar la falta de reportes de posición o alarmas revisando configuraciones del equipo y de la red
- Orienta la elección entre UDP y TCP según cobertura, pérdida de paquetes y garantías de entrega
- Permite un manejo predecible de telemetría, alertas de batería y eventos de geocerca por parte de la plataforma
- Reduce el tiempo de resolución de problemas de despliegue al alinear la configuración del dispositivo con las expectativas de la plataforma

## Por qué usar Plaspy con este protocolo

Usar el Coban GPS109 con Plaspy ofrece una solución práctica para que las organizaciones obtengan visibilidad de ubicación, monitoreen el estado de vehículos y activos, y reciban notificaciones de alarma en una plataforma unificada. La capacidad de Plaspy para aceptar conexiones en d.plaspy.com (54.85.159.138) en un único puerto compartido simplifica la configuración de dispositivos y reduce los cambios de red necesarios cuando se gestionan muchas unidades.

Para saber más sobre Plaspy y cómo funciona con rastreadores comunes como el Coban GPS109 visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo más recientes, notas de firmware e instrucciones de configuración consulte la documentación del fabricante en https://www.coban.net/.
