---
slug: /coban/bn_403c/protocol
id: bn_403c-protocol
sidebar_label: Protocol
title: Coban - BN-403C Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Coban BN-403C con Plaspy, incluyendo guía de conexión y transporte
keywords:
  - protocolo Coban BN-403C
  - protocolo GPS Coban BN-403C
  - protocolo de comunicación BN-403C
  - protocolo de rastreo BN-403C
  - compatibilidad rastreador Coban Plaspy
  - integración de dispositivos Plaspy
  - protocolo rastreador GPS para vehículos
  - comunicación para rastreadores de flota
  - reporte de telemetría GNSS
  - configuración TCP UDP para rastreadores
---

# Coban - Protocolo BN-403C

Esta página describe el contexto público del protocolo para usar el rastreador GPS Coban BN-403C con Plaspy. Explica, en términos generales, cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión son los más habituales y qué papel desempeña el protocolo de reporte para lograr una integración correcta. El objetivo es ofrecer orientación práctica y no sensible para que instaladores y operadores comprendan cómo el BN-403C envía datos útiles a Plaspy para seguimiento y alertas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo empieza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, la información aquí se centra en aspectos públicos de la comunicación del dispositivo, no en formatos de paquete de bajo nivel ni comandos privados.

## Resumen del protocolo

El protocolo de reporte del BN-403C es el mecanismo mediante el cual el dispositivo se identifica ante un backend, transmite posiciones GNSS y entrega telemetría y eventos de alarma que resultan útiles para los gestores de flota. Con Plaspy como backend, el protocolo asegura que la ubicación, el estado y los eventos lleguen en un formato que Plaspy pueda procesar y mostrar en mapas, notificaciones e historial.

- Permite al rastreador reportar posiciones GNSS y marcas de tiempo a Plaspy para ubicación en vivo e historial.
- Transporta telemetría del dispositivo, como estado de encendido, alarmas de entradas, estado de batería y datos de sensores opcionales.
- Envía eventos discretos de alarma como exceso de velocidad, puertas abiertas, golpes, geocerca y SOS para activar notificaciones.
- Soporta señales de control remoto y confirmación de comandos cuando están disponibles, habilitando funciones como control remoto del inmovilizador.
- Proporciona identificación y contexto de sesión para que Plaspy asocie los reportes entrantes con el registro de dispositivo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente qué protocolo usa cada dispositivo que reporta. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy usando los ajustes de conexión estándar.

- Plaspy escucha las conexiones entrantes en el dominio compartido d.plaspy.com y en la IP pública del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo número de puerto para reportes, lo que simplifica la configuración en el equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de Plaspy.
- Cuando el dispositivo está correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto correcto, normalmente no es necesaria la selección manual del protocolo en la plataforma.
- Si un dispositivo no aparece en Plaspy, el primer paso habitual es comprobar la configuración de reporte del dispositivo y la accesibilidad de red al endpoint de Plaspy.

## Contexto de transporte y conexión

El BN-403C soporta múltiples opciones de transporte para enviar telemetría a un backend y puede configurarse para usar UDP o TCP según la configuración del equipo y las condiciones de red. Plaspy acepta ambos transportes en el puerto compartido para que los dispositivos puedan usar el método que mejor se adapte a su entorno.

- El BN-403C puede configurarse para enviar reportes por UDP o TCP en el puerto 8888, según soporte del dispositivo y preferencia del instalador.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando no haya resolución DNS disponible.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce diferencias en la configuración por dispositivo.
- TCP se elige comúnmente cuando se prioriza la entrega fiable y la conciencia de sesión, mientras que UDP se usa donde se busca menor sobrecarga o flujos de trabajo específicos del dispositivo lo requieren.
- El dispositivo también puede utilizar SMS o configuración local por Bluetooth para la puesta a punto y como alternativa cuando el hardware del rastreador lo soporta.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comportamientos como la frecuencia de mensajes, formatos de reporte de eventos o valores por defecto de transporte; verifique la versión de firmware del rastreador al diagnosticar problemas.
- Las revisiones de hardware y accesorios opcionales pueden afectar las entradas y salidas disponibles que informa el dispositivo, por ejemplo control de relés o soporte para sensores de combustible.
- Los comandos de configuración del lado del fabricante o los pasos de activación pueden variar entre lotes de producción; consulte la documentación oficial de Coban para la configuración específica del dispositivo.
- La selección de transporte entre UDP y TCP afecta las características de entrega y debe coincidir con la configuración elegida tanto en el dispositivo como en el backend.
- Las rutas de configuración por Bluetooth utilizadas para la configuración local no cambian el endpoint de reporte en red requerido para la integración con Plaspy.
- Siempre valide un dispositivo de muestra reportando a Plaspy antes de desplegar a gran escala para confirmar que los eventos y la telemetría esperados aparecen en la plataforma.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el BN-403C ayuda a instaladores y operadores de flota a lograr reportes confiables, alertas oportunas y un comportamiento de control remoto predecible cuando el dispositivo está integrado con Plaspy. Este conocimiento mejora la resolución de problemas y garantiza que el dispositivo entregue la telemetría necesaria para los flujos operativos.

- Permite una configuración más rápida confirmando que el destino de reporte y el transporte coinciden con los ajustes de Plaspy.
- Facilita la resolución de problemas de conectividad intermitente al aislar problemas de transporte frente a comportamientos del firmware del dispositivo.
- Mejora la afinación de alarmas y eventos para que los operadores reciban notificaciones útiles sin ruido excesivo.
- Apoya la validación de sensores y accesorios opcionales para que sus datos aparezcan correctamente en Plaspy.
- Ayuda a planificar opciones de respaldo como SMS o transportes alternativos en áreas con red limitada.

## Por qué usar Plaspy con este protocolo

Usar el BN-403C junto con Plaspy ofrece a las organizaciones visibilidad consolidada de la ubicación de vehículos, eventos y desplazamientos históricos con una configuración mínima por dispositivo. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de la puesta en marcha, mientras que las capacidades de transporte múltiple y la batería de respaldo del BN-403C aseguran reportes fiables en escenarios comunes de flota y antirrobo.

Para saber más sobre Plaspy y cómo puede trabajar con el BN-403C, visite https://www.plaspy.com. Para obtener el comportamiento específico más actualizado del protocolo del dispositivo, notas de firmware e instrucciones detalladas del fabricante, consulte la información en el sitio oficial de Coban en https://www.coban.net/.
