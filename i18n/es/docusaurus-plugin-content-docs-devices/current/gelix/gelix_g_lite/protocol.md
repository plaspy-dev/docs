---
slug: /gelix/gelix_g_lite/protocol
id: gelix_g_lite-protocol
sidebar_label: Protocol
title: Gelix - Gelix G Lite Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para usar Gelix G Lite con Plaspy y obtener reportes GPS y telemática confiables
keywords:
  - Protocolo Gelix Gelix G Lite
  - Protocolo GPS Gelix G Lite
  - Protocolo de comunicación Gelix G Lite
  - Protocolo de rastreo Gelix
  - Compatibilidad telemática Gelix
  - Integración Gelix Plaspy
  - Protocolo de rastreador GLONASS GPS
  - Protocolo de rastreo de vehículos Gelix
  - Rastreo de flotas Gelix G Lite
  - Configuración Gelix G Lite
---

# Gelix - Protocolo Gelix G Lite

Este documento describe el contexto público del protocolo para usar el rastreador Gelix G Lite con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué puntos de conexión expone Plaspy y las consideraciones prácticas que influyen en un reporte e integración exitosos. El contenido se centra en hechos de carácter público y evita detalles privados de firmware o implementaciones del proveedor.

El Gelix G Lite es un rastreador telemático tipo receptor con navegación GLONASS y GPS, conectividad GSM GPRS, arranque rápido y opciones adicionales como control de relés, sensores de nivel de combustible y adaptadores CAN bus. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo que utiliza un dispositivo Gelix G Lite es el mecanismo mediante el cual el rastreador envía posición, estado y datos de sensores auxiliares a un servidor remoto y recibe comandos remotos cuando están soportados. Para Plaspy esto significa que el rastreador debe estar configurado para reportar al endpoint de Plaspy para que la plataforma reciba e interprete los mensajes del equipo.

- Permite transmitir ubicación GNSS y telemetría con marcas de tiempo a un servicio backend
- Incluye datos auxiliares como estado de relé, lecturas de sensores de combustible y métricas derivadas del bus CAN cuando están disponibles
- Permite que el dispositivo se identifique para que Plaspy asocie los mensajes con el activo correcto
- Soporta latidos (heartbeat) y reportes periódicos que mantienen el dispositivo visible en la plataforma
- Provee un canal para comandos remotos o actualizaciones de configuración cuando el firmware del fabricante lo soporta

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de dispositivos en un endpoint público compartido y determina cómo interpretar los mensajes entrantes sin requerir la selección manual del protocolo por dispositivo en la mayoría de las implementaciones. Si el Gelix G Lite está configurado para reportar a Plaspy, la plataforma intentará emparejar la transmisión entrante con un patrón de dispositivo soportado y decodificarla según el formato detectado.

- Plaspy escucha en un endpoint común para consolidar el tráfico y simplificar la configuración
- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy para reportes de dispositivos es 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente
- Normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy

## Transporte y contexto de conexión

El transporte y direccionamiento de la conexión son claves para que un Gelix G Lite reporte a Plaspy. El rastreador puede usar GPRS celular estándar para enviar datos y puede configurarse para usar UDP o TCP según el firmware del dispositivo y el comportamiento deseado. Asegurarse de que el host y el transporte estén correctamente configurados en el equipo es el requisito más común para establecer un enlace funcional con Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes con el fin de simplificar despliegues
- Elija UDP para reportes de menor sobrecarga o TCP cuando prefiera fiabilidad de transporte y estado de sesión, según soporte del dispositivo
- Verifique el APN del equipo y la conectividad celular para garantizar que el tráfico GPRS alcance el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos disponibles o las funciones opcionales; confirme siempre la versión de firmware al resolver problemas
- Las revisiones de hardware y las variantes de módulo pueden habilitar o deshabilitar funciones como control de relé, entradas de sensores de combustible o adaptadores CAN bus
- Los valores por defecto de configuración del fabricante pueden diferir de los esperados por Plaspy, por lo que actualice el host de reporte a d.plaspy.com o 54.85.159.138 y el transporte y puerto a 8888 según sea necesario
- Algunas funciones dependen de accesorios o cableado opcional, por ejemplo sensores de combustible y adaptadores CAN, lo que afecta la telemetría que el dispositivo puede enviar
- La selección de transporte entre UDP y TCP debe corresponder a la capacidad del equipo y la configuración elegida en campo
- Valide la compatibilidad con la documentación del fabricante para la compilación de firmware específica enviada con sus dispositivos

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del dispositivo ayuda a optimizar la configuración, acelera la resolución de problemas y reduce el tiempo hasta la operatividad cuando se integran rastreadores Gelix G Lite con Plaspy. Aunque Plaspy maneja la detección y decodificación automática siempre que es posible, conocer los ajustes de reporte y el comportamiento por variante del dispositivo mejora los resultados.

- Asegura que el dispositivo apunte al endpoint correcto de Plaspy para conectividad inmediata
- Ayuda a diagnosticar problemas comunes como telemetría faltante, marcas de tiempo incorrectas o lecturas de sensores ausentes
- Orienta la decisión entre UDP o TCP según condiciones de red y soporte del dispositivo
- Permite confirmar si las funciones de hardware opcionales deben aparecer en los datos de la plataforma
- Reduce el tiempo de soporte aclarando si un problema es del lado del dispositivo o de la plataforma

## Por qué usar Plaspy con este protocolo

Usar dispositivos Gelix G Lite con Plaspy ofrece a las organizaciones una vía fiable para recoger ubicación GNSS, telemetría y datos de sensores accesorios en un entorno unificado de gestión de flotas. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy simplifican despliegues a gran escala y reducen la carga de configuración por dispositivo al implementar flotas mixtas.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Gelix G Lite, visite https://www.plaspy.com. Para detalles específicos de protocolo, comportamiento de firmware y notas de implementación más recientes, consulte el sitio del fabricante Gelix en http://www.gelix.com/ ya que el soporte y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse contra la documentación oficial del fabricante.
