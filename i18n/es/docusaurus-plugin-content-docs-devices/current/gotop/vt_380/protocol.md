---
slug: /gotop/vt_380/protocol
id: vt-380-protocol
sidebar_label: Protocol
title: GOTOP - VT-380 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo GOTOP VT-380 y su compatibilidad con Plaspy, con ajustes de conexión e notas de integración
keywords:
  - protocolo GOTOP VT-380
  - protocolo GPS GOTOP VT-380
  - compatibilidad GOTOP VT-380 Plaspy
  - protocolo rastreador GOTOP
  - protocolo de seguimiento VT-380
  - protocolo de comunicación VT-380
  - integración de dispositivos Plaspy
  - protocolo rastreo GPS vehicular
  - seguimiento de flotas VT-380
  - protocolo GPRS VT-380
---

# GOTOP - Protocolo VT-380

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador vehicular GOTOP VT-380 con la plataforma Plaspy. Resume cómo el VT-380 envía telemetría y eventos a la nube, qué función cumple el protocolo de reporte en la integración y los ajustes de conexión compartidos que puede usar para apuntar el dispositivo a Plaspy para seguimiento en vivo y cargas históricas.

Plaspy emplea ajustes de conexión comunes entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento de paquetes y las opciones específicas pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante del VT-380. Para la conexión de red, el VT-380 soporta GPRS con transporte TCP o UDP y SMS como alternativa, y Plaspy acepta reportes del VT-380 usando los parámetros públicos que se describen más abajo.

## Descripción del protocolo

El protocolo de comunicación del VT-380 es el mecanismo mediante el cual el rastreador transmite identidad, ubicación, alarmas y telemetría de sensores a Plaspy y a los servidores configurados. En términos generales, este protocolo permite que el dispositivo envíe actualizaciones periódicas de posición, mensajes por eventos y cargas masivas de waypoints almacenados tras periodos sin conexión, de modo que Plaspy pueda asociar esos registros a un vehículo y mostrarlos en paneles y reportes.

- Transporta la posición del vehículo, la marca de tiempo y datos básicos de sensores desde el VT-380 al backend para mapeo y análisis.
- Envía notificaciones de alarmas y eventos como SOS, geovalla, movimiento, exceso de velocidad y corte de energía para alertas inmediatas.
- Soporta registro en modo offline y posterior carga masiva para preservar el historial de rutas cuando GPRS no está disponible.
- Funciona sobre TCP o UDP para reportes GPRS, con SMS frecuentemente usado como canal de respaldo cuando no hay conectividad de datos.
- Permite a Plaspy ingerir telemetría y correlacionarla con registros de vehículos para ubicación en vivo, reproducción histórica y alertas basadas en reglas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador que está reportando. En la mayoría de las implementaciones no necesitará seleccionar un protocolo específico dentro de Plaspy si el VT-380 está configurado para reportar al endpoint de Plaspy usando el host y transporte correctos.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 como dirección alternativa para la configuración del dispositivo.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El VT-380 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que la telemetría llega al endpoint compartido.
- Generalmente no se requiere seleccionar manualmente el protocolo dentro de Plaspy cuando el VT-380 apunta al endpoint de Plaspy.

## Transporte y contexto de conexión

La configuración de conexión del VT-380 se centra en apuntar el dispositivo al endpoint de Plaspy usando el transporte, APN y parámetros de reporte adecuados. El VT-380 soporta reportes GPRS tanto por TCP como por UDP y puede recurrir a SMS si está configurado para ello. Para la ingestión en Plaspy, el dispositivo debe enviarse al host y puerto de Plaspy indicados a continuación.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar la dirección del servidor.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el firmware del VT-380 y el comportamiento deseado.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de dispositivos en flotas.
- GPRS es el canal principal para reportes en tiempo real, con SMS como respaldo para alertas críticas o telemetría mínima en algunos despliegues.
- Cuando GPRS no está disponible, el VT-380 almacena waypoints en la memoria interna y los carga al servidor tras la reconexión.

## Notas sobre compatibilidad del protocolo

- La compatibilidad del VT-380 con Plaspy depende de la capacidad del dispositivo para reportar telemetría al endpoint de Plaspy; las variaciones de firmware pueden cambiar funciones disponibles y formatos de mensaje.
- Revisiones de hardware o compilaciones regionales de firmware pueden introducir diferencias en transports soportados, intervalos de reporte por defecto o cargas de alarmas.
- La elección del transporte (TCP vs UDP) puede afectar el comportamiento de entrega y debe seleccionarse según las condiciones de red y la capacidad del firmware del VT-380.
- El comportamiento de fallback por SMS es útil para alertas críticas pero tiene semánticas de entrega diferentes y no debe usarse como única vía para telemetría continua.
- Valide la configuración del dispositivo, el APN y la dirección del servidor usando el manual de usuario más reciente del VT-380 y la documentación del fabricante.
- Confirme que el firmware del VT-380 soporte la carga masiva de waypoints almacenados si su despliegue depende de un registro prolongado en modo offline antes de la carga.

## Por qué es importante entender el protocolo

Comprender cómo el VT-380 se comunica con Plaspy ayuda a asegurar una configuración correcta, reportes confiables y una resolución más rápida de problemas cuando surgen fallas de conectividad o datos. Estar familiarizado con el protocolo y el comportamiento del transporte permite a los operadores configurar intervalos de reporte, filtros de eventos y estrategias de recuperación que se ajusten a las necesidades operativas.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para una ingestión fiable de telemetría.
- Ayuda a seleccionar el transporte apropiado (TCP o UDP) según la fiabilidad de la red y las características de entrega esperadas.
- Facilita el diagnóstico de brechas en los datos al reconocer cuándo deben ocurrir las cargas de waypoints almacenados después de reconectar.
- Apoya la correcta configuración de alarmas y del cableado de entradas para que los eventos se mapeen adecuadamente a las alertas de Plaspy.
- Mejora la confiabilidad de la flota a largo plazo al alinear ajustes de firmware, políticas de reporte y configuración del APN con los requisitos operativos.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP VT-380 con Plaspy ofrece a los operadores de flotas una vía sencilla para centralizar el seguimiento de vehículos, las alertas de eventos y el análisis histórico de rutas. El buen desempeño GNSS del VT-380, sus alarmas completas y el registro interno se combinan con la capacidad de ingestión y los paneles de Plaspy para ofrecer una vista operativa adecuada para despacho, seguridad y cumplimiento normativo.

Para conocer más sobre Plaspy y cómo se integran dispositivos como el VT-380 con la plataforma, visite https://www.plaspy.com. Para obtener los detalles específicos del protocolo de dispositivo más recientes, notas de firmware e instrucciones de configuración, verifique la información más actual en el sitio del fabricante https://www.gotop.cc/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
