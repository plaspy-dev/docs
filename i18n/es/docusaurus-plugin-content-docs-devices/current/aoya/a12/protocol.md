---
slug: /aoya/a12/protocol
id: a12-protocol
sidebar_label: Protocol
title: AoYa - A12 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del rastreador AoYa A12 y cómo se comunica con Plaspy para seguimiento vehicular confiable
keywords:
  - Protocolo AoYa A12
  - Protocolo GPS AoYa A12
  - Compatibilidad AoYa A12 Plaspy
  - Protocolo de rastreo AoYa A12
  - Comunicación AoYa A12
  - Rastreador GPS AoYa A12
  - Rastreador vehicular AoYa A12
  - Compatibilidad de dispositivos Plaspy
  - Integración GPS Plaspy
  - Protocolo de rastreo vehicular
---

# AoYa - Protocolo A12

Esta página describe el contexto público del protocolo para usar el rastreador GPS AoYa A12 con la plataforma Plaspy. Se concentra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y qué aspectos del rastreador son relevantes para una integración exitosa, sin entrar en detalles privados de implementación.

El AoYa A12 es un rastreador automotriz compacto con posicionamiento GPS, LBS y AGPS, un chip GSM SIMTK6260, un chip GPS UBLOX y una batería de respaldo Li-ion de 250 mAh. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que esta página ofrece contexto del protocolo más que comandos específicos de firmware.

## Resumen del protocolo

A alto nivel, el protocolo del rastreador es el conjunto de convenciones que utiliza el A12 para informar ubicación, estado y eventos a un servidor remoto. Para Plaspy esto significa que el dispositivo debe estar configurado para alcanzar el endpoint de Plaspy y enviar reportes periódicos o mensajes de eventos que Plaspy pueda interpretar.

- Permite que el A12 entregue reportes de ubicación GPS, LBS y AGPS a Plaspy para seguimiento en tiempo real.
- Transmite la identidad del dispositivo y telemetría básica para que Plaspy asocie los mensajes con el activo correcto.
- Lleva indicadores de estado como la calidad de la fijación GPS, actividad de la batería de respaldo y diagnósticos básicos útiles para monitoreo.
- Soporta tanto reportes periódicos como mensajes desencadenados por eventos dependiendo de la configuración del dispositivo y el firmware.
- Actúa como puente entre el hardware A12 y las capacidades de análisis y visualización de Plaspy sin requerir que el operador seleccione manualmente el protocolo.

## Cómo Plaspy detecta el protocolo

Plaspy provee un endpoint de red común al que los dispositivos deben enviar sus reportes e incluye lógica de detección automática de protocolos en el servidor. Cuando un A12 apunta al endpoint de Plaspy y envía sus primeros reportes, Plaspy identificará el formato del mensaje y continuará procesando automáticamente los mensajes de ese dispositivo.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP pública del servidor Plaspy es 54.85.159.138 y el puerto compartido es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP apuntando al puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de los casos no es necesario seleccionar un protocolo manualmente en la plataforma.
- La configuración correcta del dispositivo para apuntar a d.plaspy.com o a la IP del servidor es el requisito común para que la detección ocurra de forma fiable.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el A12 llega a Plaspy a través de la red móvil y qué opciones de transporte se usan comúnmente. El A12 puede usar UDP o TCP según su firmware y configuración, y Plaspy acepta ambos transportes en el puerto de reporte compartido.

- El dispositivo puede configurarse para usar UDP en el puerto 8888 para reportes de bajo overhead.
- El dispositivo puede configurarse para usar TCP en el puerto 8888 para una sesión orientada a conexión si el firmware lo soporta.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 durante la configuración.
- Todos los dispositivos de Plaspy reportan usando el mismo número de puerto, por lo que las ACL de red y reglas de firewall solo necesitan permitir conexiones salientes al puerto 8888.
- Elija el transporte que mejor coincida con las indicaciones del firmware del dispositivo y el entorno de red del operador.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de ciertos mensajes o qué eventos se reportan, así que siempre anote la versión de firmware al solucionar problemas.
- Revisiones de hardware o variantes regionales pueden alterar funciones soportadas, como el comportamiento del AGPS o el reporte de la batería de respaldo.
- Las configuraciones del fabricante y los valores predeterminados de APN o del SIM pueden afectar la entrega correcta al endpoint de Plaspy.
- La elección de transporte UDP frente a TCP debe coincidir con lo que el firmware del dispositivo soporta y con lo que ofrece entrega confiable en su red.
- Al integrar a escala, valide un dispositivo de muestra de extremo a extremo antes de desplegar masivamente para confirmar conectividad y detección con Plaspy.
- Consulte la documentación del fabricante para cualquier parámetro específico del modelo que afecte el comportamiento de reporte.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del A12 ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y garantizar una operación predecible a largo plazo cuando se usa Plaspy. Conocer el papel del transporte, el reporte de identidad y la variabilidad del firmware facilita diagnosticar problemas comunes y mantener la visibilidad de la flota.

- Acelera la puesta en marcha asegurando que los dispositivos apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Ayuda a acotar problemas de conectividad cuando un dispositivo no aparece en Plaspy o muestra actualizaciones irregulares.
- Aclara por qué actualizaciones de firmware o cambios de hardware pueden modificar campos reportados o la frecuencia de mensajes.
- Apoya una mejor planificación de batería y energía al comprender cómo funciona el reporte de respaldo en el A12.
- Facilita el cumplimiento de reglas de red y firewall al confirmar el puerto compartido y los endpoints permitidos.

## Por qué usar Plaspy con este protocolo

Usar el AoYa A12 con Plaspy brinda a las organizaciones una vía sencilla hacia la visibilidad vehicular en tiempo real, monitoreo de geolocalización y supervisión operativa. El factor de forma compacto del A12, su desempeño GPS y la batería de respaldo lo hacen adecuado para instalaciones automotrices, y la detección automática de protocolos de Plaspy junto con el puerto de reporte unificado reducen la complejidad de la puesta en marcha.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el AoYa A12 y cómo configurar los reportes hacia la plataforma, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del dispositivo por parte del fabricante pueden cambiar con el tiempo, así que por favor verifique la información más reciente y específica del dispositivo en el sitio del fabricante en http://www.aoyagps.com/ antes de finalizar despliegues.
