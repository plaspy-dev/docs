---
slug: /topfly/tlp2_sfb/protocol
id: tlp2_sfb-protocol
sidebar_label: Protocol
title: TopFly - TLP2-SFB Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar TopFly TLP2-SFB con Plaspy para rastreo y telemetría
keywords:
  - protocolo TopFly TLP2 SFB
  - protocolo GPS TopFly TLP2 SFB
  - protocolo de comunicación TopFly TLP2 SFB
  - protocolo de rastreo TopFly TLP2 SFB
  - compatibilidad TLP2 SFB Plaspy
  - protocolo de dispositivo Plaspy
  - protocolo rastreador de activos TopFly
  - integración rastreador GPS Plaspy
  - telemetría cadena de frío TopFly
  - protocolo rastreador solar
---

# TopFly — Protocolo TLP2-SFB

Esta página describe el contexto público del protocolo para usar el rastreador TopFly TLP2-SFB con Plaspy. Se centra en los métodos de comunicación observables y en la configuración de conexión que permiten al dispositivo reportar ubicación y telemetría a Plaspy, sin entrar en detalles de firmware o aspectos privados del fabricante.

El TLP2-SFB es un rastreador robusto con asistencia solar, diseñado para contenedores, remolques y camiones. Cuenta con gran almacenamiento interno y soporte BLE para sensores de temperatura, humedad y estado de puertas. Plaspy utiliza configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento en tiempo de ejecución puede variar según la revisión de firmware, la variante de hardware y la implementación del fabricante.

## Resumen del protocolo

El rastreador comunica posición y telemetría usando métodos de transporte estándar que son soportados por el dispositivo y aceptados por Plaspy. El propósito del protocolo es asegurar que el rastreador pueda identificarse, enviar registros de posición y sensores, y permitir que Plaspy ingiera esos registros de forma confiable para seguimiento en tiempo real e informes históricos.

- Permite al TLP2-SFB transmitir actualizaciones de posición y telemetría a Plaspy mediante transportes soportados como TCP, UDP, MQTT y SMS cuando están disponibles.
- Incluye identificadores y campos de telemetría que permiten a Plaspy asociar mensajes entrantes con un dispositivo y cuenta específicos.
- Soporta almacenamiento en búfer en el dispositivo para que puntos históricos recolectados durante cortes de conectividad se suban a Plaspy cuando la conexión se restablezca.
- Transporta datos de sensores BLE externos (temperatura, humedad y estado de puertas) para que Plaspy pueda incorporar telemetría ambiental junto con los puntos GPS.
- Facilita el reporte de eventos como inicio/parada de movimiento, estacionamiento y alertas por manipulación o remoción, que Plaspy puede convertir en notificaciones y reglas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint común y determina automáticamente el protocolo de reporte de cada dispositivo, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma. Una configuración correcta del dispositivo para apuntar al endpoint de Plaspy permite que la plataforma asocie los reportes entrantes con el TLP2-SFB y comience a ingerir datos.

- Plaspy acepta conexiones en el endpoint público d.plaspy.com y el mismo servicio está disponible en la dirección IP 54.85.159.138 para enrutamientos directos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de los equipos y reduce errores durante la puesta en marcha.
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy, por lo que los usuarios generalmente no necesitan seleccionar un protocolo.
- Si un dispositivo soporta múltiples transportes, puede configurarse para usar el transporte más adecuado para la implementación y Plaspy ingiere los reportes desde ese transporte.
- Verifique la configuración de reporte del dispositivo y la guía del fabricante si la detección automática no ocurre como se espera, ya que algunas variantes de firmware requieren parámetros de reporte precisos.

## Transporte y contexto de conexión

El TLP2-SFB puede usar varias opciones de transporte para llegar a Plaspy según la configuración de firmware y la conectividad disponible. Entender el contexto de conexión ayuda a asegurar que los dispositivos apunten correctamente y usen el transporte esperado para cada despliegue.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y la preferencia del operador.
- El rastreador puede configurarse para reportar al endpoint DNS d.plaspy.com o a la dirección numérica 54.85.159.138 si se prefiere el enrutamiento por IP directa.
- Plaspy utiliza el puerto 8888 como puerto compartido para todos los dispositivos soportados, lo que agiliza el aprovisionamiento y la configuración de cortafuegos.
- Algunas implementaciones pueden optar por MQTT o SMS para el uplink de telemetría cuando el firmware del rastreador soporta esos transportes en paralelo con TCP o UDP.
- Al planificar despliegues, considere el comportamiento de la red móvil y las opciones de respaldo frente a cobertura intermitente para asegurar que los datos en búfer se sincronicen con Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los transportes y las opciones de mensajes disponibles, por lo que valide el comportamiento según la versión de firmware del dispositivo en campo.
- Revisiones de hardware o variantes regionales del TLP2-SFB pueden exponer diferentes bandas de radio o opciones de respaldo de transporte que afecten la forma en que el dispositivo reporta a Plaspy.
- Los comandos de configuración y los ajustes de servidor proporcionados por el fabricante son la fuente autorizada para configurar el reporte a Plaspy.
- La selección de transporte (TCP, UDP, MQTT o SMS) puede influir en la latencia, la fiabilidad y los requisitos de cortafuegos para una implementación determinada.
- El comportamiento de almacenamiento en búfer y subida del dispositivo afectará cómo se entregan los puntos históricos a Plaspy tras la reconexión.
- Confirme la compatibilidad y la cadencia de reporte de sensores BLE si depende de telemetría de temperatura, humedad o estado de puertas en los flujos de trabajo de Plaspy.

## Por qué es importante entender el protocolo

Tener una comprensión práctica de cómo el TLP2-SFB se comunica con Plaspy reduce el tiempo de configuración y facilita la resolución de problemas cuando las señales son intermitentes o faltan eventos. Conocer las opciones de transporte y el papel del firmware y los ajustes del fabricante ayuda a que los administradores mantengan los dispositivos reportando de forma confiable a lo largo del tiempo.

- Acelera el aprovisionamiento inicial al asegurar que los dispositivos apunten al endpoint correcto de Plaspy y usen el transporte soportado.
- Facilita la depuración de problemas de conectividad revisando DNS o el enrutamiento IP, reglas de puerto y la selección de transporte.
- Ayuda a interpretar el comportamiento de almacenamiento en búfer para entender cuándo y cómo aparecen puntos offline en Plaspy.
- Aclara las expectativas sobre la frecuencia de reporte de sensores BLE y cómo esa telemetría se refleja en los tableros de Plaspy.
- Orienta decisiones sobre uso de datos móviles, duración de la batería y la cadencia de reporte de eventos apropiada para la implementación.

## Por qué usar Plaspy con este protocolo

Usar el TLP2-SFB con Plaspy ofrece a las organizaciones una plataforma única para seguimiento en tiempo real, historial con buffering y telemetría ambiental. La combinación de un rastreador robusto con asistencia solar, soporte BLE para sensores y la ingestión de Plaspy habilita flujos de trabajo prácticos para monitoreo de contenedores y remolques, supervisión de cadena de frío y detección de robo o remoción.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el TLP2-SFB visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos del dispositivo, comportamiento de firmware y revisiones de hardware, verifique la información en el sitio del fabricante https://www.topflytech.com/ ya que las implementaciones y el soporte pueden cambiar con el tiempo.
