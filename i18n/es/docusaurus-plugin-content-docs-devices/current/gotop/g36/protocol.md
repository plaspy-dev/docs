---
slug: /gotop/g36/protocol
id: g36-protocol
sidebar_label: Protocol
title: GOTOP - G36 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador GOTOP G36 y su compatibilidad con la plataforma Plaspy
keywords:
  - protocolo GOTOP G36
  - protocolo GPS GOTOP G36
  - compatibilidad G36 Plaspy
  - protocolo rastreador GOTOP
  - protocolo de seguimiento G36
  - integración GOTOP Plaspy
  - rastreador GPS G36
  - protocolo de comunicación G36
  - seguimiento vehicular G36
  - seguimiento de flotas G36
---

# GOTOP - Protocolo G36

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GPS para cargador de auto GOTOP G36 con la plataforma Plaspy. Describe de manera general y no sensible cómo el dispositivo se comunica con Plaspy, de modo que gerentes de flota e integradores comprendan el papel del protocolo de reporte del rastreador en despliegues exitosos.

El G36 es un rastreador compacto para vehículo con doble puerto USB de carga rápida, posicionamiento GNSS mediante GPS y BeiDou, y posicionamiento suplementario por WiFi y LBS en entornos urbanos. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, siempre valide la configuración del equipo y el estado del firmware al solucionar problemas.

## Resumen del protocolo

El protocolo que utiliza el G36 permite que el dispositivo se identifique, reporte posición y estado, y entregue eventos de alarma y telemetría a un servicio de rastreo remoto. Para la compatibilidad con Plaspy, la función pública del protocolo es transmitir de forma fiable la ubicación, los eventos y el estado básico del equipo desde la unidad en el vehículo hasta los servidores de Plaspy para mapas, alertas e historial.

- Transmite posiciones y pistas de ubicación complementarias como WiFi o LBS celular al servidor.
- Envía eventos de alarma y estado, incluyendo disparos de geocerca, alertas de energía, vibración y notificaciones de desconexión.
- Proporciona identidad del dispositivo y metadatos de estado para que Plaspy pueda correlacionar los mensajes entrantes con el registro vehicular correcto.
- Entrega reportes periódicos o mensajes por eventos para que Plaspy actualice la ubicación en vivo y las rutas históricas.
- Soporta transporte sobre enlaces de datos móviles estándar para que la unidad alcance los servidores de Plaspy desde redes de área amplia.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de muchos modelos de rastreadores y detecta automáticamente el protocolo cuando un dispositivo está correctamente configurado para reportar al endpoint de Plaspy. En la mayoría de los despliegues no necesita elegir un protocolo manualmente dentro de Plaspy; los dispositivos que envían su información al endpoint de Plaspy suelen ser reconocidos y asociados con la plataforma.

- El endpoint público de reporte de Plaspy es accesible en d.plaspy.com y en la IP de servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones y reportes entrantes de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos identificables al endpoint.
- Los usuarios normalmente configuran el G36 para apuntar al dominio o IP de Plaspy y usan el transporte permitido (UDP o TCP) en el puerto 8888.
- Debido a que la detección del protocolo es automática, el direccionamiento correcto del dispositivo y la conectividad de red son los requisitos de configuración más comunes.

## Contexto de conexión y transporte

El contexto de conexión describe cómo el G36 alcanza Plaspy más que los detalles internos del protocolo. El G36 puede configurarse para usar el endpoint estándar de Plaspy y empleará UDP o TCP según la configuración del dispositivo y el entorno de red.

- Los equipos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- La plataforma Plaspy utiliza el puerto 8888 para el reporte de dispositivos; este es el mismo puerto usado por todos los dispositivos compatibles.
- El G36 puede configurarse para usar transporte UDP o TCP para enviar sus reportes a Plaspy en el puerto 8888.
- La conectividad celular transporta los mensajes del rastreador desde el vehículo hasta el endpoint de Plaspy sobre redes móviles.
- Asegúrese de que los operadores de red y la configuración APN permitan tráfico saliente hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el temporizado de mensajes, campos disponibles o comportamiento; confirme la versión de firmware del equipo al validar compatibilidad.
- Las revisiones de hardware o variantes de producto pueden alterar funciones disponibles como sensores suplementarios o el comportamiento de la batería de respaldo.
- Las configuraciones del fabricante (dirección del servidor, tipo de transporte, intervalo de reporte) determinan si un dispositivo puede alcanzar correctamente a Plaspy.
- Algunas funciones descritas en material comercial pueden depender de firmware opcional o configuración del lado del servidor para funcionar completamente con Plaspy.
- Al desplegar a gran escala, pruebe un dispositivo de muestra y confirme la conexión al servidor, el reporte de eventos y el comportamiento de geocercas antes de un despliegue masivo.
- Siempre compare el comportamiento observado con la guía oficial de configuración del fabricante para evitar desajustes.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del G36 ayuda a asegurar una configuración precisa, la entrega confiable de alarmas y un diagnóstico eficiente cuando integre dispositivos con Plaspy. Conocer el contexto de comunicación facilita diagnosticar problemas de conectividad y confirmar que el dispositivo reporte los eventos esperados.

- Ayuda a validar que el dispositivo esté apuntando correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Orienta la resolución de problemas por posiciones perdidas, eventos retrasados o reportes intermitentes revisando transporte y ajustes APN.
- Aclara cómo deberán aparecer en Plaspy los eventos de energía y alarma para configurar adecuadamente alertas y automatizaciones.
- Apoya la planificación del impacto de variaciones de firmware o hardware al escalar despliegues en flotas vehiculares.
- Permite coordinar de forma informada con fabricantes u operadores de red cuando la conectividad o el comportamiento se desvíen de lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G36 con Plaspy ofrece una forma sencilla de combinar reportes continuos de ubicación y alertas de eventos con la carga de dispositivos del conductor en una sola unidad. Para organizaciones que requieren visibilidad y supervisión operativa, el G36 suministra los datos básicos de ubicación, alerta y estado que Plaspy usa para presentar mapas en vivo, historial de rutas, alertas de geocerca e informes.

El endpoint estandarizado de Plaspy y la detección automática del protocolo simplifican la incorporación de dispositivos: apunte el G36 a d.plaspy.com o 54.85.159.138 usando UDP o TCP en el puerto 8888, y Plaspy procesará los reportes para mapas y alertas. Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la guía más reciente del protocolo y la configuración específica del dispositivo en el sitio del fabricante https://www.gotop.cc/.
