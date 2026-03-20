---
slug: /aplicom/t10_g/protocol
id: t10_g-protocol
sidebar_label: Protocol
title: Aplicom - T10 G Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del Aplicom T10 G y su comunicación con Plaspy para rastreo de flotas y telemetría CAN
keywords:
  - protocolo Aplicom T10 G
  - protocolo GPS Aplicom T10 G
  - compatibilidad Aplicom T10 G Plaspy
  - protocolo de comunicación Aplicom T10 G
  - protocolo de rastreo Aplicom T10 G
  - protocolo de rastreador GPS Aplicom
  - protocolo de telemetría CAN Aplicom
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - protocolo de rastreo de flotas
---

# Aplicom - Protocolo T10 G

Esta página describe el contexto público del protocolo para usar el rastreador Aplicom T10 G con Plaspy. Se enfoca en cómo el dispositivo se comunica con el backend de Plaspy en términos amplios y no sensibles, de modo que los equipos puedan comprender los requisitos de conexión, los flujos de datos esperados y los puntos de integración prácticos para telemática de flotas y telemetría vía bus CAN.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto de la conexión y el rol del protocolo más que los detalles internos del dispositivo. El Aplicom T10 G es un rastreador GPS robusto y compatible con CAN, diseñado para telemetría de flota y vehículos, e integra sus reportes dentro de los flujos habituales de telemetría y reporte de dispositivos en Plaspy.

## Resumen del protocolo

El protocolo de comunicación del T10 G permite que el dispositivo entregue ubicación, marcas de tiempo y telemetría del bus del vehículo a un servicio backend como Plaspy. En la práctica, el protocolo define cómo el rastreador se identifica ante el servidor, cómo se empaqueta la telemetría y las señales derivadas del CAN para su transmisión, y cómo el servidor reconoce o registra los reportes entrantes para su uso en paneles y alertas.

- Transporta informes de posición GNSS y marcas de tiempo que Plaspy utiliza para mapeo e historial.
- Envía señales derivadas del bus CAN, como encendido, indicadores diagnósticos y otra telemetría presente en el bus del vehículo.
- Incluye identificadores que permiten a Plaspy asociar los datos entrantes con un dispositivo y activo de flota específicos.
- Admite reportes periódicos y por eventos, de manera que la ubicación y la telemetría se envían según un cronograma o cuando cambian las condiciones.
- Funciona con los flujos de gestión remota de dispositivos provistos por Aplicom Silver Cloud para aprovisionamiento y configuración.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador a partir de las características de la conexión y la carga útil entrante. Cuando un T10 G está configurado para reportar a Plaspy, usted normalmente no necesita seleccionar un parser o protocolo manualmente dentro de Plaspy si el dispositivo apunta correctamente al servidor de Plaspy.

- Plaspy acepta conexiones en el dominio compartido d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, y la plataforma detecta automáticamente el protocolo del rastreador.
- Si el rastreador está apuntando al endpoint de Plaspy, la selección del protocolo la maneja la plataforma en lugar de una configuración manual.
- Identificadores de dispositivo correctos y los intervalos de reporte ayudan a Plaspy a correlacionar la telemetría con los activos en los paneles de la flota.
- Si un dispositivo no aparece detectado, verifique la configuración de red, la dirección del servidor y el aprovisionamiento del fabricante.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el T10 G alcanza Plaspy, sin exponer las cargas internas del protocolo. El T10 G puede configurarse para usar transporte UDP o TCP según las capacidades del dispositivo y las preferencias del operador; ambos transportes son compatibles con Plaspy en el puerto compartido. Apuntar el dispositivo al endpoint y puerto correctos de Plaspy es el paso esencial para una entrega de datos exitosa.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- La plataforma Plaspy acepta conexiones UDP y TCP en el puerto 8888 para el reporte de dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes, lo que simplifica el aprovisionamiento y las reglas de firewall.
- La elección de transporte (UDP vs TCP) afecta la semántica de entrega pero no el rol general del protocolo; elija el transporte soportado por su firmware y el plan de SIM.
- Asegúrese de que el APN del operador móvil y las políticas de red permitan conexiones salientes hacia el endpoint de Plaspy en el transporte configurado.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar los campos de telemetría disponibles, los intervalos de reporte y los valores por defecto de transporte; consulte las notas de la versión del firmware.
- Las revisiones de hardware pueden afectar qué señales CAN se exponen o cómo se comportan las opciones de montaje y alimentación en el vehículo.
- El aprovisionamiento o la administración de dispositivos por parte del fabricante (por ejemplo Aplicom Silver Cloud) puede influir en cómo se apunta el dispositivo a Plaspy y qué cargas útiles se habilitan.
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y con las restricciones de red del operador de SIM.
- Confirme que el IMEI, los identificadores del dispositivo y la dirección del servidor están configurados correctamente antes de esperar la detección automática en Plaspy.
- Siempre valide la compatibilidad y el comportamiento con las hojas de datos del fabricante y las guías de aprovisionamiento para la variante específica del T10 G que esté utilizando.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación ayuda a flotas e integradores a configurar, diagnosticar y mantener flujos de telemetría fiables hacia Plaspy. Conocer el rol del protocolo asegura que la configuración del dispositivo, las políticas de red y los flujos de trabajo de flota estén alineados para reportes de ubicación precisos y telemetría derivada del CAN.

- Acelera el aprovisionamiento inicial al confirmar la configuración correcta de servidor y transporte.
- Facilita la resolución de problemas por telemetría ausente o malformada, acotando los problemas a transporte, aprovisionamiento o firmware.
- Orienta las decisiones sobre intervalos de reporte y gestión de batería o alimentación en instalaciones vehiculares.
- Favorece la continuidad operativa al aclarar cómo se exponen y consumen las señales CAN en los paneles de Plaspy.
- Permite una mejor coordinación entre herramientas de gestión de dispositivos como Aplicom Silver Cloud y la ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom T10 G con Plaspy ofrece una vía práctica para incorporar telemetría a nivel de vehículo, señales derivadas del CAN y seguimiento continuo de ubicación en una única plataforma de gestión de flotas. La carcasa robusta con clasificación IP67 del dispositivo, su interfaz CAN integrada y la resiliencia celular lo hacen apropiado para flotas que requieren telemática fiable en distintas regiones.

Para conocer más sobre cómo Plaspy maneja la integración de dispositivos y la telemática de flotas, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y variantes de hardware más actuales del Aplicom T10 G, revise la documentación oficial de Aplicom en https://www.aplicom.com/. El soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre verifique la información más reciente del fabricante al planear despliegues.
