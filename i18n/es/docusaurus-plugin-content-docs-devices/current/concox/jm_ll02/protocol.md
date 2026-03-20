---
slug: /concox/jm_ll02/protocol
id: jm_ll02-protocol
sidebar_label: Protocol
title: Concox - JM-LL02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Concox JM-LL02 mostrando ajustes de conexión Plaspy y notas de compatibilidad para integración confiable
keywords:
  - protocolo Concox JM-LL02
  - protocolo GPS Concox JM-LL02
  - JM-LL02 Plaspy
  - protocolo de comunicación JM-LL02
  - protocolo rastreador Concox
  - protocolo de rastreo JM-LL02
  - compatibilidad dispositivo Plaspy
  - protocolo GPS Plaspy
  - rastreador de activos JM-LL02
  - rastreo de vehículos Concox
---

# Concox - JM-LL02 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Concox JM-LL02 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos no sensibles y en qué ajustes de conexión y opciones de transporte son relevantes al integrar el JM-LL02 para el seguimiento de flotas y activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El JM-LL02 es un rastreador robusto, compatible con Plaspy, pensado para despliegues prolongados con conectividad LTE Cat M1 y NB2, con conmutación a GSM, configuración por Bluetooth y larga autonomía en espera, características que influyen en el comportamiento práctico de los reportes.

## Visión general del protocolo

El protocolo es el conjunto de comportamientos y intercambios de mensajes que permiten al JM-LL02 enviar datos GNSS y telemetría a un servidor como Plaspy. En la práctica esto significa que el rastreador se identifica, envía ubicación y eventos de telemetría y admite actualizaciones de estado o configuración cuando es necesario. La documentación pública aquí se enfoca en el contexto de conexión y en qué esperar durante la integración, más que en detalles de paquete a bajo nivel.

- Permite reportar ubicación desde GNSS y LBS junto con telemetría de eventos como manipulación, batería baja, vibración y alertas de geocerca.
- Transporta identidad y estado del dispositivo para que Plaspy asocie los mensajes con el registro correcto del rastreador.
- Soporta almacenamiento en buffer y cargas periódicas para afrontar conectividad intermitente y modos de ahorro de energía.
- Permite flujos de configuración remota mediante aprovisionamiento por Bluetooth y ajustes dirigidos por el servidor cuando están disponibles.
- Proporciona los datos que Plaspy ingiere para mapas, rutas históricas y generación de alertas.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint compartido y examina el tráfico entrante para determinar el protocolo del rastreador, por lo que normalmente el usuario no necesita seleccionar nada manualmente. Plaspy detecta automáticamente el protocolo y enruta la telemetría al parser y registro de dispositivo adecuados una vez establecida la conexión.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 usando el puerto 8888 para reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- Cuando el JM-LL02 está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy inspeccionará los mensajes entrantes y seleccionará el manejo apropiado automáticamente.
- Normalmente los usuarios no necesitan establecer un protocolo manualmente en Plaspy, siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy y utilice el transporte soportado.
- La identidad básica del dispositivo y los patrones de mensajes permiten a Plaspy emparejar el flujo entrante con el tipo de dispositivo correcto sin exponer aquí detalles internos del equipo.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el JM-LL02 alcanza Plaspy y qué configurar en el dispositivo o en la red. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del firmware y el entorno de red. Elegir el transporte y destino correctos es importante para reportes consistentes y la configuración del firewall.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; seleccione el transporte que soporte su firmware y su red.
- Apunte el rastreador a d.plaspy.com o a la dirección numérica 54.85.159.138 si su proceso de aprovisionamiento requiere IP fija.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica NAT y reglas de firewall para flotas.
- Considere las reglas de la red celular y la configuración del APN al operar sobre LTE Cat M1, NB2 o la conmutación a GSM para asegurar que los paquetes lleguen a d.plaspy.com en el puerto 8888.
- El Bluetooth 5.0 del JM-LL02 es útil para el aprovisionamiento inicial, de modo que pueda configurar los ajustes del servidor y el transporte sin abrir la carcasa.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos de telemetría disponibles o los transportes soportados. Verifique siempre la versión de firmware del rastreador al solucionar problemas.
- Las revisiones de hardware y las variantes regionales a veces modifican las bandas soportadas o el comportamiento de reporte por defecto; confirme las especificaciones de la variante para las unidades desplegadas.
- Los menús de configuración del fabricante o las apps de aprovisionamiento pueden ofrecer opciones para UDP frente a TCP y para intervalos de reporte; elegir ajustes coincidentes es importante para la ingestión por parte de Plaspy.
- Los modos de ahorro de energía y bajo consumo alteran la frecuencia de reporte y el comportamiento de agrupamiento de cargas, lo que puede afectar la rapidez con la que los eventos llegan a Plaspy.
- Valide cualquier cambio personalizado de dirección de servidor o transporte contra la configuración de Plaspy para asegurarse de que los mensajes lleguen a d.plaspy.com en el puerto 8888.
- Para implementaciones a gran escala pruebe primero un grupo pequeño antes del despliegue completo para confirmar que el transporte y el firmware elegidos funcionan como se espera con Plaspy.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación a un nivel práctico le ayuda a configurar el JM-LL02 de forma eficiente, evitar problemas comunes de integración y mantener flujos de datos confiables hacia Plaspy durante el ciclo de vida del dispositivo. Entender la interacción entre el comportamiento del dispositivo, el transporte y el enrutamiento de Plaspy reduce tiempos de inactividad y facilita la resolución de problemas.

- Asegura la selección correcta de dirección de servidor y transporte para que los datos lleguen consistentemente a Plaspy.
- Ayuda a diagnosticar faltas de reporte que pueden deberse a ahorro de energía, caídas de conectividad o APN mal configurados.
- Orienta en la elección de intervalos de reporte y umbrales de evento para equilibrar la duración de batería y la frescura de los datos.
- Mejora la planificación de firewall, NAT y configuraciones de operador al saber que Plaspy escucha en el puerto 8888 para todos los dispositivos.
- Facilita el aprovisionamiento en campo usando Bluetooth para evitar configuraciones manuales repetitivas.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Concox JM-LL02 convierte la larga autonomía de la batería del dispositivo, su conectividad celular resiliente y la telemetría de eventos en información accionable para las operaciones. Las organizaciones se benefician de seguimiento centralizado, alertas configurables por manipulación o batería baja y datos históricos de rutas que apoyan la logística y la seguridad de activos. La carcasa robusta y el montaje magnético del JM-LL02 lo hacen adecuado para activos redeployables, mientras Plaspy se encarga de la detección del protocolo y la ingestión de datos.

To learn more about how Plaspy works with a wide range of trackers and to explore platform capabilities visit https://www.plaspy.com. Protocol support details, firmware behavior, and manufacturer implementation can change over time so please verify the latest device specific information on the manufacturer site https://www.iconcox.com/ before finalizing deployment decisions.
