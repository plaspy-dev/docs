---
slug: /telic/sbc_product_family/protocol
id: sbc_product_family-protocol
sidebar_label: Protocol
title: Telic - SBC product family Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Telic SBC y cómo estos rastreadores se comunican con Plaspy para telemática de flotas confiable
keywords:
  - Protocolo familia SBC Telic
  - Protocolo GPS Telic SBC
  - Compatibilidad Telic SBC Plaspy
  - Protocolo seguimiento familia SBC
  - Protocolo telemática Telic
  - Protocolo SBC CAN 4G
  - Protocolo SBC AVL 4G
  - Comunicación rastreador GPS
  - Protocolo seguimiento flotas
  - Protocolo telemetría vehicular
---

# Telic — Protocolo de la familia de productos SBC

Esta página describe el contexto público del protocolo para usar la familia de productos Telic SBC con Plaspy. Explica cómo estas unidades telemáticas robustas suelen comunicarse con un endpoint en la nube, qué papel desempeña el protocolo del dispositivo en una integración exitosa y cómo Plaspy ingiere la telemetría para seguimiento y gestión de flotas. El contenido se centra en aspectos públicos y no sensibles de la comunicación para ayudar en la planificación y resolución de problemas de integraciones con Plaspy.

La familia SBC (incluidos SBC3 CAN 4G y SBC AVL 4G) se entrega como compatible con Plaspy y está diseñada para conectividad LTE Cat M1 y múltiples interfaces cableadas como CAN bus, 1-Wire y RS232. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles de paquetes específicos por modelo consulte la documentación de Telic y la hoja de datos del dispositivo.

## Descripción general del protocolo

El protocolo de comunicación empleado por los dispositivos SBC define cómo el rastreador reporta ubicación, telemetría y estado hacia un endpoint en la nube y cómo la nube puede confirmar o enviar comandos cuando está soportado. En el contexto de Plaspy, el protocolo expone los elementos esenciales necesarios para mapear los reportes del dispositivo en posiciones, canales de telemetría y reglas de eventos, sin detallar aquí los aspectos internos del proveedor.

- Permite la transmisión segura y confiable de ubicación y telemetría desde el dispositivo SBC hacia el endpoint en la nube.
- Transporta información de identificación y estado que permite a Plaspy asociar cada flujo entrante con un dispositivo y un activo de la flota concretos.
- Lleva lecturas de CAN, serial y sensores para que Plaspy pueda poblar paneles, alertas y registros históricos.
- Soporta tanto actualizaciones periódicas de ubicación como mensajes basados en eventos para alarmas, cambios de ignición y umbrales de sensores.
- Admite funciones dependientes del firmware, como configuración remota o diagnóstico, cuando el fabricante expone esas capacidades.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo SBC está correctamente configurado para reportar al endpoint de Plaspy. Esto reduce la configuración manual dentro de la plataforma y ayuda a que los dispositivos comiencen a reportar con mínima intervención del operador. La detección se basa en la observación de los reportes entrantes en el endpoint compartido de Plaspy en lugar de requerir que el usuario seleccione manualmente un protocolo en la mayoría de los casos.

- Plaspy escucha el tráfico de dispositivos en un único endpoint de servidor compartido para simplificar la configuración.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 para referencias de configuración directa.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, por lo que no necesita puertos específicos por dispositivo.
- Cuando el dispositivo apunta al endpoint de Plaspy y envía reportes, Plaspy identificará automáticamente la variante de protocolo compatible.
- Generalmente usted solo necesita configurar el host y el transporte de reporte del dispositivo; Plaspy ingerirá y mapeará los datos entrantes.

## Contexto de transporte y conexión

Los dispositivos SBC pueden configurarse para usar cualquiera de los transportes comunes según las capacidades del modelo y las necesidades del despliegue. El uso de TCP o UDP y el endpoint compartido de Plaspy son las principales consideraciones al poner unidades SBC en producción con Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según su proceso de aprovisionamiento.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; seleccione el transporte que soporte su firmware y el entorno de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, lo que estandariza reglas de firewall y red para despliegues de flota.
- Elija el transporte (UDP o TCP) que coincida con la capacidad del dispositivo y los requisitos de confiabilidad de su despliegue.
- Asegúrese de que la configuración del operador móvil y los perfiles APN permitan conexiones salientes al endpoint de Plaspy sobre el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o cambiar campos de telemetría y el comportamiento de los mensajes; verifique siempre qué firmware tiene el dispositivo al evaluar compatibilidad.
- Las variantes de hardware dentro de la familia SBC (por ejemplo modelos con diferentes conjuntos de interfaces) pueden exponer distintos canales de telemetría o sensores.
- Las opciones de configuración por parte del fabricante pueden alterar qué transportes de red están disponibles o qué entradas de host soporta el dispositivo.
- La selección del transporte (UDP vs TCP) puede afectar la semántica de entrega de mensajes y debe elegirse según las necesidades de la aplicación y la confiabilidad de la red.
- Para funciones avanzadas como configuración remota o diagnóstico confirme el soporte en el firmware del dispositivo y en la documentación de Telic.
- Valide la compatibilidad con las hojas de datos de Telic y su guía de configuración de dispositivos Plaspy antes de implementaciones a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo opera el protocolo de reporte de los SBC ayuda a asegurar un despliegue sin contratiempos, una resolución de problemas efectiva y un comportamiento predecible a largo plazo cuando los dispositivos interactúan con Plaspy. Tener claridad sobre las elecciones de transporte, los campos de identificación y los canales de telemetría reduce el tiempo de integración y ayuda a los operadores a interpretar correctamente los datos de eventos y ubicación.

- Simplifica la configuración inicial al alinear los ajustes de reporte del dispositivo con el endpoint y el puerto de Plaspy.
- Acelera la resolución de problemas cuando las actualizaciones de posición o los campos de telemetría no aparecen como se espera.
- Facilita el diseño de reglas de red y políticas de firewall porque Plaspy usa un endpoint y puerto únicos y conocidos.
- Permite validar con confianza cambios de firmware o reemplazos de dispositivos en una flota mediante el monitoreo de campos de mensaje consistentes.
- Apoya la planificación de funciones operativas como sondeos frecuentes, manejo de alarmas o agregación de telemetría.

## Por qué usar Plaspy con este protocolo

Usar la familia de productos SBC con Plaspy reúne hardware robusto y optimizado para IoT con una plataforma en la nube que ingiere posición y telemetría de vehículos para ofrecer visibilidad operativa. Las organizaciones obtienen actualizaciones de ubicación confiables, integración de datos CAN y sensores, y un endpoint estandarizado que reduce la sobrecarga de configuración por dispositivo. Esta combinación es útil para gestores de flota, telemática de remolques, flujos de trabajo antirobo y automatizaciones basadas en telemetría.

Para conocer más sobre las capacidades de Plaspy y cómo sus dispositivos Telic SBC se integran con la plataforma visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos por dispositivo, comportamiento de firmware y notas de implementación del fabricante, verifique la información en el sitio oficial de Telic https://www.telic.de ya que el soporte de protocolo y las funciones de firmware pueden cambiar con el tiempo.
