---
slug: /gotop/g59/configuration
id: g59-configuration
sidebar_label: Configuration
title: GOTOP - G59 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP G59 con ajustes de servidor Plaspy, lista de verificación y flujo práctico
keywords:
  - Configuración GOTOP G59
  - Instalación GOTOP G59
  - GOTOP G59 Plaspy
  - Configuración rastreador GPS GOTOP
  - Configuración software G59
  - Configuración plataforma GPS G59
  - Ajustes servidor Plaspy
  - Guía configuración rastreador de mascotas
  - Configuración etiqueta collar GPS
  - Integración G59 con Plaspy
---

# GOTOP - Configuración del G59

Esta página describe el contexto público de configuración para usar el rastreador impermeable para mascotas GOTOP G59 con Plaspy. Incluye los ajustes públicos del servidor Plaspy a los que debe apuntar el G59, qué verificar antes de la puesta en marcha y un flujo práctico para registrar y comprobar el dispositivo en Plaspy. El contenido se centra en los detalles de integración públicamente disponibles y en cómo el rastreador comunica ubicación en tiempo real, alertas y actividad a Plaspy.

El G59 es una etiqueta para collar compacta con clasificación IP67 que ofrece seguimiento en tiempo real compatible con Plaspy mediante 4G LTE, envío de enlaces de ubicación por SMS con Google Maps y comunicación de voz bidireccional. Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que siempre confirme el procedimiento específico con la documentación de GOTOP.

## Visión general de la configuración

Preparar un G59 para su uso con Plaspy implica configurar el dispositivo para que envíe su ubicación y estado al endpoint compartido de Plaspy y verificar que los datos lleguen a su cuenta de Plaspy. El objetivo es garantizar conectividad fiable, reportes precisos y alertas útiles para el seguimiento y monitoreo de mascotas.

- Apunte el G59 al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888 de Plaspy.
- Seleccione transporte UDP o TCP en el dispositivo si es necesario; Plaspy acepta ambos en el mismo puerto.
- Valide que el dispositivo tenga una conexión de datos celular activa para reportes por 4G LTE o capacidad de SMS cuando corresponda.
- Confirme que el dispositivo aparezca en línea en Plaspy y que se reciban actualizaciones de posición, alertas de geocerca y notificaciones de batería baja.
- Mantenga a mano el firmware y las herramientas de configuración del fabricante para ajustar parámetros según sea necesario.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el G59 para comunicarse con Plaspy:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: se soporta UDP o TCP; configure el G59 para cualquiera de los dos si el dispositivo requiere selección
- Manejo del protocolo: Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos valores son los ajustes públicos que Plaspy necesita para aceptar datos entrantes del rastreador. Asegúrese de que el dispositivo apunte al dominio o a la IP y use el puerto 8888.

## Requisitos habituales antes de la configuración

- Batería cargada y alimentación funcional para que el rastreador pueda establecer la conexión celular.
- SIM activa con plan de datos y capacidad de SMS cuando se requiera para reportes 4G LTE y enlaces de ubicación por SMS.
- Acceso al método oficial de configuración de GOTOP para el G59 (herramienta web del fabricante, aplicación móvil o comandos SMS).
- Cobertura celular confiable en el área donde operará la mascota para asegurar que las actualizaciones de posición lleguen a Plaspy.
- Su cuenta de Plaspy y los detalles de aprovisionamiento del dispositivo listos para validar que el rastreador informe correctamente.
- Verificación de la versión de firmware para asegurar compatibilidad con los comandos y ajustes actuales.

## Cómo se conecta este rastreador a Plaspy

El G59 envía fijaciones de posición y mensajes de estado a la plataforma Plaspy mediante su conexión celular. Los datos reportados a Plaspy permiten mostrar ubicación en vivo, historial y alertas en la interfaz de Plaspy, además de entregarlos como notificaciones o SMS cuando estén configurados.

- El rastreador reporta posiciones derivadas de GPS, BeiDou, Wi‑Fi y LBS al endpoint compartido d.plaspy.com o 54.85.159.138.
- Los mensajes se envían al puerto 8888; Plaspy acepta UDP o TCP y detecta automáticamente el protocolo del dispositivo.
- Las alertas de geocerca, notificaciones de batería baja y la telemetría de actividad se reenvían a Plaspy para alertas e historial.
- El G59 soporta mensajes de ubicación por SMS con enlaces a Google Maps para compartir rápidamente fuera de la aplicación.
- Los eventos de llamadas de voz remotas y el estado de monitoreo pueden quedar registrados en los logs de Plaspy cuando estén disponibles.

## Flujo de configuración recomendado

Siga este flujo práctico para configurar un G59 en Plaspy:

1. Acceda al método oficial de configuración de GOTOP para el G59 (app móvil del fabricante, portal web o conjunto de comandos SMS).
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de ajustes del servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 como puerto de destino para los datos de seguimiento.
4. Seleccione transporte UDP o TCP si el G59 exige elegir un transporte.
5. Verifique o configure la APN de la SIM según lo requiera el operador móvil para que el dispositivo use datos 4G LTE.
6. Aplique o guarde la configuración y siga cualquier instrucción del fabricante para confirmar el cambio.
7. Reinicie el dispositivo si el fabricante lo recomienda o si el equipo necesita un reinicio para aplicar los ajustes de red.
8. Valide en Plaspy que el dispositivo aparezca en línea y esté reportando actualizaciones de posición, eventos de geocerca y mensajes de estado.

## Ejemplos de comandos de configuración

El fabricante del G59 puede ofrecer varios métodos de configuración, como app móvil, portal web o comandos SMS. Los comandos y la sintaxis exacta dependen del firmware de GOTOP y del canal de configuración utilizado. Dado que los comandos varían según la herramienta y la versión de firmware, consulte la documentación de GOTOP para la sintaxis y ejemplos específicos del dispositivo. Plaspy requiere que se configure en el dispositivo el servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888; el transporte puede ser UDP o TCP.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y las opciones disponibles; siempre revise las notas de la versión de GOTOP antes de aplicar ajustes.
- TCP y UDP se comportan de forma distinta en redes celulares; elija el transporte que mejor se adapte a su instalación y valide la conectividad en Plaspy.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, lo que simplifica el enrutamiento del lado del servidor.
- Si la configuración por SMS está disponible para la puesta en marcha, puede ser útil para verificaciones rápidas en zonas con datos limitados.
- Confirme la APN y los ajustes del operador con su proveedor móvil si el dispositivo no logra establecer conexión de datos.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G59 con Plaspy ofrece a propietarios de mascotas y organizaciones visibilidad en tiempo real consistente, alertas y registro de eventos en los paneles y notificaciones de Plaspy. La capacidad de posicionamiento multimodal del G59 y su diseño impermeable ayudan a mantener un seguimiento preciso en entornos urbanos y al aire libre, mientras que Plaspy centraliza ubicación, alertas de geocerca y reportes de estado para un monitoreo sencillo.

Para obtener más información sobre Plaspy e integración de dispositivos compatibles, visite https://www.plaspy.com. Para los pasos más recientes de configuración específicos del G59, detalles de firmware y la documentación del fabricante, verifique la información con GOTOP en https://www.gotop.cc/.
