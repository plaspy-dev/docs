---
slug: /concox/vl110c/protocol
id: vl110c-protocol
sidebar_label: Protocol
title: Concox - VL110C Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la compatibilidad del rastreador Concox VL110C con Plaspy, con contexto de conexión y notas de integración
keywords:
  - protocolo Concox VL110C
  - protocolo GPS Concox VL110C
  - compatibilidad VL110C Plaspy
  - protocolo de comunicación VL110C
  - protocolo de rastreo VL110C
  - protocolo del rastreador GPS Concox
  - integración de dispositivos Plaspy
  - protocolo terminal GNSS vehicular
  - rastreo de flotas VL110C
  - comunicación telemetría VL110C
---

# Concox - Protocolo VL110C

Esta página describe el contexto público del protocolo para usar el terminal GNSS vehicular Concox VL110C con Plaspy. Se enfoca en cómo el rastreador se comunica con Plaspy de forma general, qué ajustes de conexión expone Plaspy públicamente y consideraciones prácticas para una integración exitosa sin exponer detalles internos del dispositivo.

El VL110C es un rastreador compacto 4G LTE Cat 1 con fallback a GSM, GNSS integrado, protección IP65, amplio rango de entrada de 9–90 V y batería de respaldo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página explica el contexto de comunicación público y qué verificar al integrar dispositivos VL110C con Plaspy.

## Resumen del protocolo

El protocolo de comunicación de los dispositivos VL110C regula cómo el rastreador se identifica, reporta posición y telemetría, y entrega eventos y alarmas a un endpoint en la nube. Para la integración con Plaspy, lo más importante es que el dispositivo reporte al endpoint correcto y use un transporte compatible para que Plaspy pueda ingerir ubicación, alarmas y datos de comportamiento de conducción.

- El protocolo transporta telemetría esencial como posiciones GNSS, estado del encendido, alarmas y etiquetas de eventos que Plaspy mapea en sus flujos de seguimiento y reportes.
- Los datos de identificación y de sesión que envía el rastreador permiten a Plaspy asociar los mensajes entrantes con un registro de dispositivo específico en la plataforma.
- El reporte de eventos (por ejemplo encendido, estado de relé, alertas por interferencia) aparece como telemetría estructurada que Plaspy utiliza para alertas e historial.
- Lo que realmente importa para la integración es la capacidad del dispositivo para alcanzar el endpoint de Plaspy y entregar mensajes de forma fiable sobre el transporte seleccionado.
- Diferencias en firmware, versiones regionales y canales de configuración opcionales (SMS, herramientas PC) pueden afectar qué mensajes envía el dispositivo y con qué frecuencia.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores y detectar automáticamente el protocolo que usa un dispositivo que reporta correctamente al endpoint de Plaspy. En la mayoría de los casos, los propietarios sólo necesitan configurar el rastreador para apuntar al servidor de Plaspy y seleccionar el transporte adecuado; Plaspy se encarga de la identificación del protocolo en el servidor.

- Plaspy utiliza un endpoint y puerto compartidos para el reporte de dispositivos, de modo que los equipos pueden apuntar a un único destino.
- El dominio público de servidor de Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de reporte común usado por Plaspy es 8888 y todos los dispositivos en Plaspy usan ese mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo envía datos al endpoint de Plaspy, por lo que típicamente no es necesario seleccionar el protocolo manualmente en la plataforma.
- Si un dispositivo no es detectado, verifique que esté configurado para reportar al endpoint de Plaspy y que el transporte y la APN estén correctos.

## Transporte y contexto de conexión

El contexto de conexión es crítico para la entrega confiable. El VL110C soporta transportes celulares y puede configurarse para usar UDP o TCP para alcanzar el endpoint de Plaspy, según la configuración del equipo y el comportamiento del operador. Entender qué transporte usa el dispositivo ayuda al diagnosticar problemas de conectividad o telemetría retrasada.

- El VL110C puede configurarse para reportar a d.plaspy.com o directamente a la IP 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según su configuración y capacidades de firmware.
- Plaspy acepta conexiones UDP y TCP en el mismo puerto, por lo que la elección de transporte en el dispositivo no requiere endpoints de servidor diferentes.
- Todos los dispositivos en Plaspy usan el puerto 8888, por lo que reglas de firewall y del operador deben permitir tráfico saliente hacia ese puerto de destino.
- Al probar la conectividad, asegúrese de que la APN del dispositivo, el plan de la SIM y las condiciones de señal permitan sesiones salientes UDP o TCP hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la frecuencia de mensajes, los tipos de eventos soportados y campos opcionales; siempre anote la versión de firmware al validar el comportamiento.
- Las revisiones de hardware o SKUs regionales del VL110C pueden incluir pequeñas diferencias en soporte de bandas de radio o en el cableado de periféricos que afectan la instalación y la telemetría.
- Algunos canales de configuración (SMS, USB/herramienta PC) son provistos por el fabricante y pueden usarse para establecer el servidor de reporte y el transporte antes de la incorporación a la nube.
- La elección de transporte (UDP vs TCP) puede influir en las características de entrega; seleccione el transporte que coincida con la configuración del dispositivo y sus requisitos operativos.
- La configuración por defecto del fabricante a veces apunta a otra nube; confirme que el VL110C esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy.
- Valide los identificadores del dispositivo y el reporte de IMEI para que Plaspy pueda mapear la telemetría entrante al registro de dispositivo correcto.

## Por qué es importante entender el protocolo

Entender el protocolo de comunicación ayuda a asegurar que los dispositivos estén configurados correctamente, que Plaspy reciba la telemetría esperada y que la resolución de problemas sea más eficiente. Tener claridad sobre el contexto público del protocolo reduce errores de configuración y acelera la puesta en marcha de nuevas unidades en los flujos de trabajo de flota.

- Ayuda a confirmar que el rastreador apunta al endpoint correcto de Plaspy y usa el puerto 8888 para que los mensajes lleguen a la plataforma.
- Agiliza la resolución cuando los dispositivos parecen estar fuera de línea, al aislar problemas de transporte, DNS, APN o firewall.
- Aclara qué telemetría y eventos esperar en los paneles de Plaspy según las funciones conocidas del dispositivo como GNSS, entrada de encendido y salida de relé.
- Apoya la planificación ante actualizaciones de firmware o variantes regionales que puedan cambiar formatos de mensaje o eventos soportados.
- Mejora la confiabilidad operativa al garantizar que los ajustes a nivel de dispositivo se alineen con las expectativas de ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el VL110C con Plaspy ofrece un camino directo a la visibilidad en tiempo real y al control operativo para flotas pequeñas y equipos. La combinación del VL110C de conectividad LTE con fallback 2G, GNSS integrado, batería de respaldo y salida de relé cubre casos de uso comunes que Plaspy soporta, como seguimiento en vivo, geocercas, acciones de inmovilizador y manejo de alarmas.

El diseño de endpoint compartido de Plaspy simplifica los despliegues a escala de flota porque cada dispositivo se configura para reportar al mismo servidor y puerto. Para saber más sobre cómo Plaspy puede trabajar con dispositivos VL110C y revisar opciones de despliegue, visite https://www.plaspy.com. Los detalles del protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que por favor verifique la información más reciente específica del dispositivo en el sitio del fabricante en https://www.iconcox.com/.
