---
slug: /gotop/c790/protocol
id: c790-protocol
sidebar_label: Protocol
title: GOTOP - C790 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para el rastreador GOTOP C790 compatible con Plaspy y detalles de conexión
keywords:
  - protocolo GOTOP C790
  - protocolo GPS GOTOP C790
  - GOTOP C790 Plaspy
  - protocolo rastreador GPS GOTOP
  - protocolo rastreo de vehículos
  - comunicación rastreador GPS
  - rastreo de flotas GOTOP
  - compatibilidad GOTOP C790
  - protocolo de rastreo GOTOP C790
  - soporte de rastreadores Plaspy
---

# GOTOP - Protocolo C790

Esta página describe el contexto público del protocolo para usar el rastreador vehicular GOTOP C790 con la plataforma Plaspy. Se centra en los puntos de comunicación e integración más relevantes para configurar, reportar y monitorear el dispositivo en Plaspy, evitando detalles sensibles de implementación.

El GOTOP C790 combina posicionamiento por satélite con comunicación GPRS y soporta funciones como corte remoto de combustible, detección de ACC, entrada SOS, alertas de geocerca y varios tipos de alarma. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador automáticamente. El dominio del servidor Plaspy es d.plaspy.com. La IP del servidor Plaspy es 54.85.159.138. El puerto es 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto. Plaspy detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar la documentación específica del equipo cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador define cómo el C790 informa ubicación, estado e información de eventos a un servidor remoto y cómo se entregan comandos remotos para funciones como el corte de combustible o cambios de parámetros. Para la integración con Plaspy, el protocolo se trata como el transporte de telemetría y señales de control entre el dispositivo y la plataforma.

- Permite que el C790 reporte posicionamiento GPS o Beidou y el estado de conectividad GPRS a Plaspy
- Transporta la identificación del dispositivo y detalles de sesión para que Plaspy asocie los reportes con la unidad correcta
- Transmite alarmas y notificaciones de eventos como SOS, vibración, exceso de velocidad y pérdida de alimentación
- Permite acciones de control remoto soportadas por el equipo, como corte de combustible cuando está autorizado y enrutado a través de Plaspy
- Soporta telemetría útil para historial, reproducción y alertas por geocerca visibles en Plaspy
- Funciona sobre transporte de red estándar, de modo que el mismo endpoint de Plaspy puede aceptar varios tipos de equipo

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y usa esa entrada para determinar qué protocolo de rastreador está enviando datos. En la mayoría de los casos, un C790 configurado correctamente que reporte al endpoint de Plaspy será detectado automáticamente, lo que elimina la necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según las opciones del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir un formato manualmente
- Un ID de dispositivo y ajustes de APN correctos en el rastreador facilitan que Plaspy asocie los reportes entrantes con la unidad adecuada
- Si no se produce la detección, verificar el destino de reporte del equipo y la conectividad de red es el primer paso de solución de problemas

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el C790 alcanza a Plaspy y si el dispositivo usa UDP o TCP para reportar. Para Plaspy, los detalles públicos de conexión son fijos para que los administradores puedan apuntar los dispositivos al host y puerto correctos para el manejo automático por la plataforma.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a 54.85.159.138
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes
- Usar el APN y el perfil GPRS correctos en el C790 asegura que pueda alcanzar el endpoint de Plaspy
- Condiciones de red como la señal de datos móviles y la configuración del operador pueden afectar la entrega y deben validarse
- Para equipos detrás de NAT o en redes restringidas, confirme que el tráfico saliente hacia el endpoint de Plaspy esté permitido

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del C790 pueden cambiar qué comandos y eventos están disponibles o cómo se reportan
- Las revisiones de hardware o variantes del modelo pueden exponer diferentes E/S, alarmas o funciones opcionales
- La selección de transporte entre UDP y TCP es configurable en el dispositivo y afecta la confiabilidad y el comportamiento de sesión
- Ajustes del fabricante como la dirección de servidor por defecto o presets de APN pueden requerir ajustes para el reporte a Plaspy
- Valide la compatibilidad confirmando que el dispositivo puede registrarse y enviar reportes de prueba al endpoint de Plaspy
- En caso de duda, consulte la documentación oficial de GOTOP para el comportamiento específico del modelo y las notas de versiones de firmware
- Mantenga registros de firmware y configuraciones del dispositivo para ayudar a reproducir cualquier problema de integración

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a administradores e instaladores a asegurar reportes confiables del dispositivo, habilitar funciones soportadas y solucionar problemas de conectividad o comportamiento al usar Plaspy.

- Configuración más rápida al confirmar servidor, transporte y ajustes de APN correctos antes del despliegue
- Solución de problemas más eficaz cuando faltan reportes o los eventos no aparecen en Plaspy
- Expectativas claras sobre qué funciones del equipo se pueden gestionar de forma remota a través de la plataforma
- Mejor planificación para actualizaciones de firmware que puedan cambiar el reporte o el comportamiento de comandos
- Mayor fiabilidad de la flota al emparejar la capacidad del dispositivo con los requisitos operativos
- Coordinación más sencilla con los fabricantes cuando el comportamiento del equipo se desvíe de lo esperado

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un rastreador GOTOP C790 ofrece a las organizaciones una plataforma para recoger datos de ubicación y eventos, revisar recorridos históricos y actuar ante alertas críticas del dispositivo. La combinación de ajustes de transporte comunes y detección automática de protocolo simplifica la incorporación de equipos y reduce la carga de configuración.

Si desea saber más sobre Plaspy y cómo gestiona integraciones de dispositivos, visite https://www.plaspy.com. Para la documentación más reciente específica del dispositivo, notas de firmware y detalles de hardware, verifique la información en el sitio del fabricante https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
