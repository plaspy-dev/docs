---
slug: /eelink/tk319/protocol
id: tk319-protocol
sidebar_label: Protocol
title: EElink - TK319 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador EElink TK319 y cómo se comunica con Plaspy para rastreo e integración de flotas
keywords:
  - Protocolo EElink TK319
  - Protocolo GPS EElink TK319
  - Protocolo de comunicación EElink TK319
  - Protocolo de rastreo EElink TK319
  - Protocolo de rastreador EElink
  - Compatibilidad TK319 Plaspy
  - Integración de dispositivos Plaspy
  - Rastreo de flota TK319
  - Integración GPS EElink
  - Compatibilidad de firmware TK319
---

# EElink - Protocolo TK319

Esta página presenta el contexto público del protocolo para usar la serie de rastreadores EElink TK319 con Plaspy. Describe a alto nivel cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión revisar y qué aspectos del diseño y firmware del TK319 suelen afectar los reportes y la configuración remota. El objetivo es ofrecer información práctica y no sensible para ayudar a administradores e integradores a encaminar los datos del dispositivo hacia Plaspy.

El TK319-H es un rastreador 3G con localización por GPS y LBS, detección de ACC, entrada opcional de temperatura, control de relé y opciones de configuración remota. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la forma en que el fabricante implementó comandos remotos y reportes.

## Visión general del protocolo

El protocolo que utiliza el TK319 define cómo el rastreador se identifica y entrega posiciones, estado y datos de sensores a un servidor como Plaspy. En términos prácticos, el protocolo se encarga del establecimiento de sesión, reportes periódicos, mensajes de alarma y la capacidad de recibir comandos de configuración o control cuando el dispositivo y la red lo permiten.

- Permite que el rastreador informe ubicación por GPS y LBS, velocidad y actualizaciones de estado a un endpoint remoto
- Transporta identificadores del dispositivo e información de estado para que Plaspy pueda asociar los mensajes con un activo
- Soporta cargas periódicas y basadas en eventos, como movimiento, geocerca, eventos ACC y alertas de batería baja
- Permite la configuración remota cuando el firmware del dispositivo expone ajustes y respuestas por servidor
- Integra capacidades del hardware del rastreador, como control de relé e informes de sensor de temperatura, en eventos accionables en la plataforma

## Cómo Plaspy detecta el protocolo

Plaspy acepta los datos entrantes de los rastreadores en un único endpoint compartido y determina el protocolo del dispositivo automáticamente cuando llega un mensaje con el formato esperado. Esto significa que, por lo general, la plataforma no requiere que el usuario seleccione manualmente el protocolo siempre que el rastreador esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- Plaspy usa el puerto 8888 para las conexiones de dispositivos y todos los dispositivos en Plaspy usan ese mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes al endpoint compartido
- Si un dispositivo está configurado para reportar a d.plaspy.com con el transporte y puerto correctos, normalmente no es necesaria la selección manual del protocolo en Plaspy

## Transporte y configuración de conexión

El transporte y los ajustes de destino son fundamentales para establecer comunicación confiable entre el TK319 y Plaspy. El rastreador puede configurarse para usar distintos modos de transporte según el firmware y la configuración del usuario; confirme el transporte elegido y la dirección del servidor antes de poner en servicio los dispositivos.

- El TK319 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como endpoint de Plaspy
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de servidores y cortafuegos
- Elija UDP para reportes con menor sobrecarga o TCP cuando se prefiera confiabilidad de sesión y el firmware del dispositivo lo soporte
- Verifique el APN y los ajustes de la red móvil para garantizar que el rastreador tenga conectividad de datos hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones regionales de hardware pueden cambiar el formato de mensajes y las funciones soportadas
- Algunas unidades TK319 pueden exponer configuración remota por servidor, SMS o una combinación; confirme qué vías de control están habilitadas
- La selección de transporte (UDP versus TCP) es configurable en muchas unidades y afecta el comportamiento de entrega y reconexión
- Sensores opcionales como temperatura o entradas GPIO externas requieren soporte de firmware para reportarse vía protocolo
- Personalizaciones del fabricante o variantes OEM pueden alterar identificadores o conjuntos de comandos respecto a documentos de referencia genéricos
- Valide la compatibilidad con la documentación actualizada de EElink y las notas de la versión del firmware antes de desplegar a gran escala

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar un rastreo confiable, facilita la resolución de problemas y asegura el mapeo correcto de la telemetría del dispositivo dentro de Plaspy. Saber qué puede enviar el rastreador y cómo se conecta reduce el tiempo de integración y mejora la visibilidad operativa.

- Ayuda a verificar que el dispositivo apunta al endpoint y transporte correctos de Plaspy
- Facilita el diagnóstico de problemas de conectividad como cortafuegos, APN o ajustes de servidor incorrectos
- Aclara qué datos de sensores y alarmas puede proporcionar el TK319 a Plaspy para automatizaciones y alertas
- Apoya decisiones sobre selección de transporte y expectativas del servidor respecto al tiempo de los mensajes
- Sirve para planificar actualizaciones de firmware o estrategias de reemplazo y mantener la compatibilidad a largo plazo

## Por qué usar Plaspy con este protocolo

Usar el EElink TK319 con Plaspy ofrece a las organizaciones una forma práctica de recopilar en tiempo real posición, sensores y estado de vehículos y activos. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación, permitiendo que los dispositivos reporten a una sola dirección mientras la plataforma clasifica y procesa los mensajes entrantes.

Plaspy está diseñado para aceptar conexiones de dispositivos en d.plaspy.com o 54.85.159.138 en el puerto 8888 y manejar patrones comunes de reporte de rastreadores para que las flotas puedan enfocarse en la operación en vez de en el enrutamiento de protocolos. Para obtener más información sobre Plaspy y cómo funciona con una amplia gama de dispositivos, visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de EElink https://www.eelink.com.cn/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
