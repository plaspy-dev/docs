---
slug: /arknav/rv_8/protocol
id: rv_8-protocol
sidebar_label: Protocol
title: ArkNav - RV-8 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público para integrar ArkNav RV-8 con Plaspy, incluyendo transporte y compatibilidad
keywords:
  - ArkNav RV-8 protocolo
  - ArkNav RV-8 protocolo GPS
  - ArkNav RV-8 protocolo de comunicación
  - ArkNav RV-8 protocolo de seguimiento
  - Compatibilidad de rastreadores Plaspy
  - Protocolo de dispositivos Plaspy
  - Protocolo de rastreador GPS
  - Protocolo de telemática para flotas
  - Integración para seguimiento de vehículos
  - Telemetría y seguimiento
---

# ArkNav — Protocolo RV-8

Esta página explica el contexto público del protocolo para usar el rastreador de flotas GPS ArkNav RV-8 con Plaspy. Se enfoca en cómo el equipo se comunica con la plataforma Plaspy en términos generales, cómo se usan los ajustes de conexión compartidos y qué consideraciones de integración importan para lograr telemetría y reportes de posición confiables. La orientación aquí está pensada para ayudar a integradores y administradores de flota a entender conectividad y compatibilidad sin revelar detalles privados de implementación.

Plaspy acepta conexiones de dispositivos soportados mediante un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo, el contenido de los paquetes y las funciones del firmware pueden variar según la versión de firmware del RV-8, la revisión de hardware y la configuración del fabricante, por lo que los ajustes y capacidades del dispositivo deben validarse con la documentación de ArkNav y la versión de firmware desplegada.

## Resumen del protocolo

El rastreador RV-8 utiliza su firmware para recoger GNSS y telemetría del vehículo, y luego transmitir esos datos a un servidor remoto para su procesamiento y visualización. El protocolo de comunicación define cómo el equipo se identifica, cómo se formatean y envían los datos de posición y eventos, y cómo se emplean canales cifrados opcionales para proteger la telemetría en tránsito.

- Permite reportes periódicos y por evento de posiciones GNSS, telemetría del vehículo y alarmas a Plaspy para mapeo y alertas.
- Proporciona identificación del dispositivo e información de sesión para que Plaspy pueda asociar los datos entrantes con el registro de dispositivo correcto.
- Soporta reporte de ubicación híbrido que combina soluciones uBlox con fallback por celular para mejorar cobertura en zonas de señal débil.
- Puede utilizar opciones de transporte cifrado disponibles en el dispositivo, como AES256 y SSL256, para aumentar la privacidad de los datos.
- Transporta datos de diagnóstico y periféricos, como OBDII, CANBus y sensores auxiliares, junto con las actualizaciones de posición.
- Permite mensajes de latido o keepalive para que la plataforma pueda monitorear el estado en línea del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores en un único endpoint de servicio compartido y determinar automáticamente qué protocolo usa un equipo cuando llegan datos válidos. Esto reduce pasos de configuración en la plataforma y simplifica el alta de dispositivos en flotas mixtas.

- Los dispositivos deben configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones entrantes de rastreadores y usa ese mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.
- La identificación correcta del dispositivo y la configuración adecuada del servidor son los prerrequisitos habituales para la detección automática y el mapeo exitoso de datos.
- Si un dispositivo no es detectado automáticamente, los pasos comunes de resolución incluyen verificar el APN y la conectividad de la SIM, confirmar la dirección del servidor y el tipo de transporte, y comprobar la compatibilidad del firmware.

## Transporte y contexto de conexión

El RV-8 puede configurarse para usar distintos modos de transporte según el firmware y las preferencias de despliegue. Para la conectividad con Plaspy, los parámetros clave son el host del servidor y el puerto compartido que utiliza la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la elección del administrador.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos para simplificar la configuración y las reglas de firewall para integradores.
- Si se requiere comunicación cifrada, configure el dispositivo para usar las opciones de cifrado soportadas y verifique la compatibilidad con Plaspy durante las pruebas.
- Asegúrese de que el APN y los ajustes celulares del dispositivo permitan conexiones salientes al endpoint de Plaspy y que los firewalls de los operadores admitan el transporte seleccionado.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar detalles del protocolo y las funciones disponibles; siempre confirme el comportamiento con las notas de la versión del firmware del dispositivo.
- Las revisiones de hardware y los módulos accesorios opcionales pueden añadir o modificar campos de telemetría que la plataforma recibe y muestra.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega; elija según la confiabilidad de la red y las necesidades de la aplicación.
- Las configuraciones del fabricante o las variantes regionales del dispositivo pueden alterar los ajustes de servidor por defecto o las capacidades de cifrado.
- Verifique que el APN, la configuración de la SIM y el cableado de alimentación del dispositivo coincidan con las recomendaciones de ArkNav para evitar conectividad intermitente.
- Use dispositivos de prueba o de staging para validar la integración con Plaspy antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo del rastreador mejora el éxito en la puesta en marcha, reduce el tiempo de resolución de problemas y ayuda a garantizar una operación confiable a largo plazo con Plaspy. Saber qué envía el dispositivo y cómo se conecta permite a los integradores alinear expectativas de red, seguridad y plataforma para uso en producción.

- Asegura que el dispositivo esté apuntado al endpoint y puerto correctos de Plaspy para permitir la detección automática del protocolo.
- Ayuda a diagnosticar problemas de conectividad como tipo de transporte equivocado, dirección de servidor incorrecta o configuración de SIM y APN.
- Aclara qué campos de telemetría están disponibles desde el dispositivo para configurar correctamente los paneles y alertas en Plaspy.
- Orienta decisiones sobre cifrado y ajustes de seguridad para cumplir con las políticas organizacionales.
- Prepara a los equipos para los impactos de las actualizaciones de firmware en el comportamiento de reporte y las funciones disponibles.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav RV-8 con Plaspy ofrece a las flotas seguimiento en tiempo real confiable, telemetría del vehículo y notificaciones de eventos que apoyan flujos operativos como despacho, monitoreo de seguridad y respuesta ante robo. El diseño robusto del RV-8, sus opciones de integración con el vehículo y el reporte híbrido de ubicación se complementan con las capacidades de ingestión y mapeo agnósticas de dispositivo de Plaspy.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y documentación de hardware consulte al fabricante en https://www.arknavgps.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con las fuentes oficiales de ArkNav.
