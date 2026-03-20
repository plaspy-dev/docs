---
slug: /neomatica/adm007_ble_cl/protocol
id: adm007_ble_cl-protocol
sidebar_label: Protocol
title: Neomatica - ADM007 BLE CL Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Neomatica ADM007 BLE CL con Plaspy en monitoreo vehicular
keywords:
  - Neomatica ADM007 BLE CL
  - Protocolo ADM007 BLE CL
  - Protocolo rastreador GPS Neomatica
  - Compatibilidad ADM007 BLE CL Plaspy
  - Protocolo seguimiento vehicular Neomatica
  - Rastreador sensores BLE Neomatica
  - Rastreador GPS enchufe encendedor
  - Gestión de flotas Plaspy
  - Compatibilidad rastreador GPRS GPS
  - Comunicación ADM007 BLE CL
---

# Neomatica - Protocolo ADM007 BLE CL

Esta página describe, a un nivel público y sin detallar secretos, el contexto del protocolo para integrar el rastreador de auto Neomatica ADM007 BLE CL con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué información envía y en consideraciones prácticas para su configuración, detección y reportes fiables. El ADM007 BLE CL es un rastreador compacto tipo enchufe de encendedor que soporta sensores BLE y tiene bajo consumo de datos mensuales; aquí explicamos cómo esas capacidades encajan con la conectividad en Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según versión de firmware, revisión de hardware e implementación del fabricante, por lo que esta guía permanece en un nivel público y práctico, resaltando los puntos clave para integrar el ADM007 BLE CL con Plaspy.

## Visión general del protocolo

El ADM007 BLE CL emplea su módem celular y la interfaz BLE para recolectar ubicación, estado y datos opcionales de sensores, y luego envía esa información a un servidor remoto. El protocolo de comunicación define cómo el rastreador se identifica, cuándo informa posición y eventos, y cómo transmite telemetría y diagnósticos que Plaspy puede usar para monitoreo y alertas.

- La identificación del dispositivo y la información de sesión permiten al servidor asociar los datos entrantes con el activo y la cuenta correctos.
- Los reportes periódicos y por eventos entregan coordenadas GPS/GLONASS y estado de movimiento para seguimiento en tiempo real y registro histórico.
- Los datos de sensores BLE se incluyen en la telemetría para que, al emparejar sensores, Plaspy pueda mostrar parámetros adicionales del vehículo.
- Los mensajes de estado y eventos de alarma, como detección de inhibición o jamming, proporcionan señales operativas que Plaspy puede mostrar a los usuarios.
- Un comportamiento de reporte eficiente mantiene bajo el consumo de datos mensuales, acorde con el objetivo de diseño del ADM007 BLE CL.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones en un endpoint y puerto compartidos y selecciona automáticamente el manejador de protocolo adecuado para el tráfico entrante. Cuando el ADM007 BLE CL está configurado para reportar al endpoint de Plaspy, la plataforma empata los mensajes entrantes con el dispositivo y comienza el procesamiento sin que el usuario tenga que elegir manualmente un protocolo en Plaspy.

- El endpoint del servidor de Plaspy es accesible en d.plaspy.com y en la IP pública 54.85.159.138.
- La plataforma escucha en el puerto 8888 para todos los dispositivos soportados y utiliza el mismo puerto compartido para todos los tipos de tracker.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo informa al endpoint, por lo que normalmente no es necesario seleccionar el protocolo de forma manual.
- Asegúrese de configurar el ADM007 BLE CL para apuntar a d.plaspy.com o a la IP indicada para una detección fiable.
- Verifique que el dispositivo tenga APN y ajustes móviles correctos para que pueda establecer una sesión GPRS y reportar a Plaspy.

## Transporte y contexto de conexión

El ADM007 BLE CL puede configurarse para usar modos de transporte comunes en rastreadores celulares. Para la integración con Plaspy, los detalles importantes son el host de destino y la opción de transporte que se elija en el equipo. Plaspy soporta ambos métodos de transporte principales en el puerto compartido, por lo que puede seleccionar el que mejor ajuste al firmware del dispositivo y a las condiciones de la red.

- Los dispositivos pueden configurarse para usar UDP o TCP al enviar datos al puerto 8888.
- Configure el ADM007 BLE CL para reportar al host d.plaspy.com o a la IP 54.85.159.138 según la guía del fabricante.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración del servidor en el rastreador.
- La elección del transporte puede afectar las garantías de entrega y el comportamiento en redes con poca cobertura; elija UDP o TCP según la documentación del dispositivo.
- Confirme la SIM, el APN y los ajustes GPRS en el rastreador para que pueda establecer conectividad con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El ADM007 BLE CL es compatible con Plaspy cuando está configurado para reportar al endpoint de Plaspy, pero la compatibilidad depende de la versión de firmware y de la configuración del dispositivo.
- Revisiones de firmware y variantes de hardware pueden introducir diferencias en el comportamiento de reporte y en las funcionalidades soportadas, por ejemplo en la carga útil de sensores BLE.
- Opciones del lado del fabricante, como modo de transporte, intervalos de reporte y umbrales de alarma, influyen en cómo aparecen los datos en Plaspy.
- Las versiones de sensores BLE y los procedimientos de emparejamiento pueden variar; confirme la compatibilidad de sensores y los pasos de emparejado antes de un despliegue a gran escala.
- Use el puerto compartido de Plaspy 8888 y el destino d.plaspy.com o 54.85.159.138 para evitar desajustes de enrutamiento o endpoints.
- Siempre valide el firmware instalado y la configuración con la documentación actual de Neomatica para el ADM007 BLE CL.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador facilita la puesta en marcha, mejora la confiabilidad continua y acelera la resolución de problemas cuando los dispositivos no aparecen en Plaspy o faltan datos. Conocer el contexto de conexión y lo que el dispositivo reporta ayuda a confirmar el comportamiento de red, alimentación y sensores.

- Confirma que el equipo apunta al endpoint y puerto correctos de Plaspy para permitir la detección automática.
- Ayuda a decidir si usar UDP o TCP para obtener mejores resultados en una red móvil concreta.
- Aclara cómo se reenvía la telemetría de sensores BLE para verificar que los sensores emparejados estén reportando.
- Orienta los pasos de solución para problemas comunes como ausencia de datos, reportes intermitentes o comportamientos de alimentación inesperados.
- Apoya la planificación del uso de datos y del consumo de energía o batería en despliegues reales.

## Por qué usar Plaspy con este protocolo

Usar el Neomatica ADM007 BLE CL con Plaspy ofrece una ruta directa hacia visibilidad del vehículo y supervisión operativa. El bajo consumo de datos mensuales del ADM007 BLE CL, el soporte para sensores BLE que aportan telemetría adicional y su instalación tipo enchufe de encendedor lo hacen práctico para flotas y seguimiento de vehículos particulares. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos reducen la fricción de configuración para que los dispositivos empiecen a reportar con mínima intervención manual.

Si desea conocer más sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Para notas de protocolo específicas del dispositivo, detalles de firmware e instrucciones de configuración más actuales para el ADM007 BLE CL, verifique la información en el sitio del fabricante https://neomatica.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
