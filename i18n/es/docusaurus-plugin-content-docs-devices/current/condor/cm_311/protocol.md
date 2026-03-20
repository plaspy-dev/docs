---
slug: /condor/cm_311/protocol
id: cm_311-protocol
sidebar_label: Protocol
title: Condor - CM-311 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del Condor CM-311 con Plaspy para rastreo en tiempo real
keywords:
  - protocolo Condor CM-311
  - rastreador GPS Condor CM-311
  - compatibilidad CM-311 Plaspy
  - protocolo GPS Condor
  - protocolo rastreador de mascotas
  - integración rastreador GPS Plaspy
  - protocolo de rastreo Condor
  - rastreo de mascotas en tiempo real
  - protocolo de comunicación de rastreador
  - protocolo de dispositivo Plaspy
---

# Condor - Protocolo CM-311

Esta página describe el contexto público del protocolo para el uso del rastreador Condor CM-311 con Plaspy. Explica a alto nivel cómo se comunica el dispositivo con Plaspy, qué ajustes de conexión se utilizan y qué esperar al integrar el CM-311 en el entorno de monitoreo en tiempo real de Plaspy. El CM-311 es un dispositivo compacto para mascotas que transmite la ubicación GPS a través de redes celulares y es compatible con Plaspy para seguimiento en vivo y registro de rutas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo, los intervalos de reporte y la telemetría disponible pueden variar según la versión de firmware del CM-311, la revisión de hardware y la implementación del fabricante. Esta página se enfoca en el contexto público y no sensible del protocolo para ayudar en la configuración y solución de problemas, recomendando validar detalles específicos del firmware en la documentación del fabricante.

## Resumen del protocolo

El CM-311 transmite datos GPS y telemetría básica al cloud de Plaspy para que los propietarios puedan ver la ubicación en vivo, reproducir rutas y recibir alertas. El dispositivo usa un enlace celular para enviar reportes periódicos al endpoint de Plaspy, donde la información se normaliza y se presenta en la plataforma.

- El protocolo permite al rastreador transmitir ubicación y estado básico a Plaspy para visualización en tiempo real.
- La información de identificación del dispositivo permite a Plaspy asociar los reportes con la cuenta y el activo correctos.
- Los reportes de telemetría regulares alimentan el historial de rutas y la reproducción de actividad en la interfaz de Plaspy.
- El protocolo actúa como puente entre los reportes brutos del dispositivo y los servicios de telemetría de Plaspy que generan alertas y visualizaciones.
- El comportamiento, como la frecuencia de reporte y los campos disponibles, puede depender del firmware y la configuración del equipo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un endpoint de red compartido y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Para la mayoría de los casos, el dispositivo solo necesita estar configurado para enviar sus reportes a Plaspy; normalmente no es necesaria una selección explícita del protocolo dentro de la plataforma.

- Plaspy utiliza un único endpoint de servidor para el reporte de dispositivos en d.plaspy.com.
- El servidor de Plaspy también es accesible en la IP pública 54.85.159.138 para equipos que prefieren direccionamiento numérico.
- Todos los dispositivos configurados para reportar a Plaspy usan el mismo puerto, lo que permite a la plataforma gestionar varias familias de rastreadores de forma consistente.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe reportes en el endpoint compartido.
- Si el dispositivo está correctamente configurado para enviar datos al endpoint de Plaspy, rara vez será necesaria la selección manual del protocolo en la plataforma.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento son opciones de configuración en el CM-311 y rastreadores similares. Entender este contexto ayuda a asegurarse de que el dispositivo apunte correctamente a Plaspy y use el protocolo de red previsto para una entrega fiable.

- El CM-311 puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad y ajustes del dispositivo.
- Plaspy escucha en el puerto 8888 los reportes de dispositivos en todos los rastreadores soportados.
- Los dispositivos pueden enviarse a d.plaspy.com o directamente a la IP 54.85.159.138.
- Usar el transporte y el destino correctos garantiza que el dispositivo alcance el endpoint de Plaspy y que la detección automática del protocolo pueda ocurrir.
- Consideraciones a nivel de red, como NAT del operador o reglas de firewall, pueden afectar la entrega y deben verificarse si los reportes no llegan.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar entre revisiones de firmware para el mismo hardware CM-311, por lo que confirme la versión de firmware si el comportamiento difiere de lo esperado.
- Revisión de hardware o diferencias de SKU pueden cambiar los campos de telemetría disponibles o las opciones de transporte.
- Los valores por defecto de configuración del fabricante podrían usar un transporte o dirección de servidor específicos; actualice el dispositivo para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 al integrar con Plaspy.
- Algunas funciones avanzadas presentes en rastreadores vehiculares no aplican a unidades enfocadas en mascotas como el CM-311; verifique los campos compatibles antes de depender de telemetría específica.
- El comportamiento de la red celular según el operador y la región puede influir en la fiabilidad de los reportes y debe probarse en el área de despliegue.
- Siempre contraste el comportamiento del dispositivo con la documentación de Condor para validar cualquier detalle de protocolo específico del equipo.

## Por qué es importante entender el protocolo

Conocer cómo el CM-311 se comunica con Plaspy facilita una configuración más fluida, una resolución de problemas más rápida y una operación confiable a largo plazo. Comprender claramente el transporte y el contexto del protocolo reduce conjeturas al diagnosticar reportes faltantes o comportamientos extraños.

- Asegura que el dispositivo apunte al endpoint y ajustes de transporte correctos de Plaspy para reportes exitosos.
- Ayuda a identificar si un problema es del lado del dispositivo, de la red o de la recepción en el servidor.
- Facilita la verificación de que el firmware en uso soporta los campos de telemetría de los que depende su flujo de trabajo.
- Apoya decisiones informadas sobre cuál modo de transporte utilizar para mayor fiabilidad en su entorno.
- Mejora la velocidad de recuperación cuando un dispositivo deja de reportar al acotar las causas probables.

## Por qué usar Plaspy con este protocolo

Usar el Condor CM-311 con Plaspy brinda a los propietarios y cuidadores acceso a una plataforma madura de rastreo en tiempo real, manteniendo la experiencia del dispositivo ligera y enfocada. Plaspy convierte los reportes entrantes del CM-311 en mapas claros, historial de rutas y alertas configurables para que usted pueda monitorear mascotas sin gestionar detalles de bajo nivel del protocolo.

El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos y reducen la carga de configuración. Para conocer más sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos de dispositivos, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de Condor https://condorskyseeker.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
