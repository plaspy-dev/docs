---
slug: /coban/tk103b/protocol
id: tk103b-protocol
sidebar_label: Protocol
title: Coban - TK103B Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para usar el rastreador Coban TK103B con Plaspy, guía de configuración y compatibilidad
keywords:
  - protocolo Coban TK103B
  - protocolo GPS Coban TK103B
  - protocolo TK103B
  - rastreador GPS TK103B
  - protocolo Coban Plaspy
  - protocolo de rastreador GPS
  - protocolo de seguimiento de vehículos
  - rastreador GPS GPRS
  - seguimiento de flotas Plaspy
  - compatibilidad de protocolo de dispositivos
---

# Coban - Protocolo TK103B

Esta página ofrece contexto público sobre el protocolo para utilizar el rastreador GPS Coban TK103B con la plataforma Plaspy. Se enfoca en cómo se comunica el equipo a un alto nivel, las opciones de conexión más comunes y qué verificar al integrar unidades TK103B en Plaspy para seguimiento y monitoreo. El contenido está dirigido a administradores, integradores y usuarios técnicos que configuran dispositivos para reportes confiables.

El Coban TK103B es un rastreador vehicular que admite transmisión por SMS, GPRS y datos por internet, e incluye funciones como soporte de SIM dual, rastreo en tiempo real, alarmas de emergencia, geocercas y sensores opcionales. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el tráfico y el comportamiento exacto pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Confirme la configuración del equipo y el firmware al planear la integración.

## Resumen del protocolo

El protocolo del rastreador es el método que el dispositivo usa para identificarse ante un servidor, reportar ubicaciones y datos de sensores, y enviar alertas y estados a una plataforma de flotas como Plaspy. Para la integración de unidades TK103B con Plaspy, el objetivo principal es asegurarse de que el equipo esté configurado para enviar sus reportes al endpoint de Plaspy y que el transporte de red que use el rastreador esté permitido por su plan de conectividad.

- Transporta los datos de identificación del dispositivo que permiten al servidor asociar los reportes entrantes con una unidad específica.
- Transmite información de ubicación, hora y estado para que Plaspy presente telemetría útil para el seguimiento.
- Entrega alertas y notificaciones de eventos como SOS, exceso de velocidad, violaciones de geocerca y batería baja.
- Soporta múltiples mecanismos de transporte (datos celulares o SMS) para que los dispositivos reporten por el método más adecuado según la implementación.
- Permite comandos remotos y configuración cuando el firmware del equipo lo admite y cuando el tráfico se enruta a través de un endpoint de servidor compatible.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint y puerto consolidados, y detecta automáticamente el protocolo del rastreador a partir de patrones de datos entrantes y campos de identificación. En la mayoría de los casos, un TK103B configurado correctamente comenzará a reportar a Plaspy sin requerir la selección manual del protocolo dentro de la plataforma.

- Apunte el dispositivo al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 para el reporte.
- Plaspy escucha en el puerto 8888 para conexiones y datos de los rastreadores compatibles.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que un único endpoint de red simplifica la configuración de la flota.
- Normalmente el usuario no necesita elegir un protocolo dentro de Plaspy cuando el rastreador está configurado para reportar al endpoint de Plaspy.
- Asegúrese de que la red del dispositivo permita el envío de datos y que la configuración de APN y la SIM permitan reportes por GPRS.

## Contexto de transporte y conexión

Los dispositivos TK103B pueden enviar datos mediante GPRS celular y pueden configurarse para usar UDP o TCP según la unidad y el firmware. Al integrar con Plaspy, confirme que el equipo apunte al endpoint de Plaspy y que su plan de red soporte el modo de transporte seleccionado.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- Plaspy escucha tanto UDP como TCP en el puerto 8888; configure el rastreador según el transporte que soporte.
- El puerto del servidor Plaspy es el mismo para todos los dispositivos compatibles, lo que hace consistente la configuración de firewall y red en una flota mixta.
- Si el rastreador admite fallback por SMS, esto puede utilizarse como método alternativo para alertas críticas cuando los datos no estén disponibles.
- Verifique que la SIM, el APN y la configuración GPRS de la unidad sean correctos para que los paquetes lleguen de forma fiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de los reportes del TK103B o los modos de transporte disponibles; confirme las notas de la versión del firmware para cambios en el protocolo.
- Las variaciones de hardware y las funciones opcionales, como sensores de combustible o módulos de control de puertas, pueden afectar qué campos de datos están presentes en los reportes.
- Los comandos de configuración y el comportamiento del fabricante pueden variar según el distribuidor o la región; consulte la guía de configuración del dispositivo cuando esté disponible.
- Probar un dispositivo de muestra en el endpoint en vivo de Plaspy antes de un despliegue amplio ayuda a confirmar el comportamiento y la cadencia de los reportes.
- Elija UDP o TCP en la configuración del equipo conforme al soporte del firmware específico y a sus necesidades de confiabilidad de red.
- Confirme los ajustes de APN y el comportamiento de SIM dual para que el rastreador use de manera consistente la ruta de conectividad prevista.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que los dispositivos reporten de forma confiable, que las alarmas se entreguen y que las operaciones remotas funcionen como se espera. Incluso cuando una plataforma como Plaspy detecta automáticamente el protocolo del rastreador, conocer el comportamiento general de reporte mejora la configuración y la resolución de problemas.

- Resuelve fallas más rápido cuando los dispositivos no aparecen en Plaspy, porque usted podrá validar transporte, endpoint y ajustes de APN.
- Mejora la planificación del despliegue al seleccionar versiones de firmware y hardware que se ajusten a sus necesidades operativas.
- Garantiza que alertas y eventos críticos se capturen y enruten a Plaspy para una acción oportuna.
- Ayuda a definir la configuración de firewall, NAT y del operador necesaria para permitir que los datos del rastreador lleguen al servidor Plaspy.
- Mejora la confiabilidad a largo plazo al comprender cómo modos de suspensión, intervalos de reporte y actualizaciones de firmware afectan la conectividad.

## Por qué usar Plaspy con este protocolo

Usar el Coban TK103B con Plaspy brinda a las organizaciones una forma práctica de recopilar datos de ubicación y eventos de activos vehiculares mientras se apoya en un endpoint de servidor único y consistente. El puerto de escucha consolidado de Plaspy y la detección automática de protocolos simplifican la incorporación de flotas mixtas y reducen la carga de configuración que suele asociarse a despliegues a gran escala.

Para saber más sobre cómo Plaspy trabaja con rastreadores como el Coban TK103B, visite https://www.plaspy.com. Tenga en cuenta que el comportamiento del protocolo, las funciones del firmware y la implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo específico del dispositivo y las notas de firmware en el sitio del fabricante https://www.coban.net/ antes de finalizar despliegues a gran escala.
