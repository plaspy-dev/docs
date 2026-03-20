---
slug: /careu/ez1/protocol
id: ez1-protocol
sidebar_label: Protocol
title: CAREU - EZ1 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador GPS CAREU EZ1 y cómo se comunica con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Protocolo CAREU EZ1
  - Protocolo GPS CAREU EZ1
  - Compatibilidad CAREU EZ1 con Plaspy
  - Protocolo de comunicación CAREU EZ1
  - Protocolo de rastreo CAREU EZ1
  - Protocolo de rastreador CAREU
  - Rastreador GPS EZ1
  - Rastreo de vehículos CAREU EZ1
  - Gestión de flotas EZ1
  - Compatibilidad de dispositivos Plaspy
---

# CAREU - Protocolo EZ1

Esta página describe el contexto público del protocolo para usar el rastreador GPS CAREU EZ1 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, el papel del protocolo de reporte del rastreador y los ajustes de conexión clave que deberá configurar para que el EZ1 envíe ubicación, estado y eventos a la plataforma.

El CAREU EZ1 LTE es un rastreador AVL compacto disponible en LTE Cat 1 con conmutación a 3G y 2G, y existe una variante 2G con Bluetooth 3.0. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante. Esta página ofrece orientación pública y no sensible para ayudarle a integrar el EZ1 con Plaspy y destaca lo que debe verificar en la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del rastreador es el conjunto de reglas que sigue el EZ1 para enviar posiciones, eventos y telemetría a un servidor remoto como Plaspy. En la práctica, el protocolo permite que el dispositivo se identifique, reporte datos de ubicación y sensores, y reciba configuraciones remotas o confirmaciones de comandos cuando están soportadas.

- Permite que el EZ1 reporte posiciones GPS/Glonass, eventos del acelerómetro y datos de sensores auxiliares a un servidor central para gestión de flotas.
- Transporta información de identidad y sesión que permite a Plaspy asociar mensajes con un dispositivo y cuenta específicos.
- Traduce eventos del dispositivo como frenadas bruscas, cruces de geocerca y alarmas de energía en reportes accionables para los operadores.
- Soporta telemetría opcional e entradas de accesorios como sensores de temperatura 1-Wire, accesorios RS232 y configuración por Bluetooth cuando están disponibles.
- Funciona junto con los parámetros de transporte de red para que el dispositivo alcance el endpoint de Plaspy de forma fiable sobre redes móviles.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos e inspecciona los mensajes reportados para determinar cómo decodificar el tráfico del dispositivo. Dado que Plaspy detecta automáticamente el protocolo del rastreador, la mayoría de usuarios no necesitan seleccionar manualmente un protocolo en la plataforma cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único endpoint de servidor para recibir los reportes y mapea los mensajes entrantes a los tipos de dispositivo soportados.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para configuraciones de red y pruebas.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar a la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un EZ1 correctamente configurado normalmente no requiere selección manual de protocolo dentro de Plaspy.
- Si un dispositivo no reporta o usa un firmware no estándar, revise los ajustes de red del dispositivo y la documentación del fabricante para asegurar la configuración correcta de reporte.

## Transporte y contexto de conexión

Los ajustes de transporte y DNS determinan cómo el EZ1 alcanza Plaspy. La serie CAREU EZ1 admite opciones comunes de transporte sobre datos móviles y puede apuntarse al endpoint de Plaspy usando una dirección IP o un nombre DNS según la configuración de la red y del dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según lo que soporte el equipo y la elección en la provisión.
- Los dispositivos destinados a reportar a Plaspy pueden apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138 como objetivo del servidor.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que configurar el puerto 8888 en el dispositivo lo alinea con las expectativas de la plataforma.
- Verifique el APN y los ajustes de datos móviles en la SIM para asegurarse de que el EZ1 pueda acceder a Internet público y al endpoint de Plaspy.
- Si tiene restricciones por firewall o del operador, permita salidas UDP y TCP hacia el endpoint de Plaspy y confirme la resolución DNS de d.plaspy.com.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar campos de mensaje, reportes disponibles y comandos opcionales; confirme el comportamiento del firmware para cualquier dispositivo que despliegue.
- Las revisiones de hardware pueden cambiar el soporte de accesorios, como variantes de antena interna, el cableado RS232 o los métodos de configuración por Bluetooth.
- Algunas funciones como soporte Garmin FMI, tipos de geocerca o comportamiento de FOTA pueden ser opcionales o depender del firmware.
- La selección de transporte (UDP versus TCP) debe coincidir con la configuración del dispositivo; elegir el transporte incorrecto puede impedir el reporte exitoso.
- Las configuraciones por defecto del fabricante pueden variar; siempre valide que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Para integraciones avanzadas o firmware personalizado, consulte la documentación oficial de CAREU y los registros de cambios antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el EZ1 ayuda a garantizar que los dispositivos reporten de forma fiable a Plaspy, facilita la resolución de problemas y aumenta la confianza operativa en toda la flota.

- Acelera la primera configuración al alinear el transporte del dispositivo y los ajustes del servidor con las expectativas de Plaspy.
- Ayuda a diagnosticar fallas de reporte aislando causas relacionadas con transporte, DNS, APN o firmware.
- Mejora la calidad de los datos al asegurar que los sensores necesarios y las entradas de accesorios estén habilitados e interpretados correctamente.
- Favorece el mantenimiento a largo plazo al identificar cuándo actualizaciones de firmware o revisiones de hardware pueden cambiar el comportamiento.
- Permite configurar adecuadamente geocercas, alarmas y reportes personalizados dentro de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el CAREU EZ1 ofrece una forma sencilla de centralizar ubicaciones de vehículos, reportes de eventos y telemetría de sensores en una plataforma de gestión de flotas. El factor de forma compacto del EZ1, su soporte celular global, entradas de acelerómetro y interfaces de accesorios lo hacen adecuado para casos de uso como logística, flotas de alquiler y monitoreo de activos. Con Plaspy encargándose de la detección de protocolo y un único puerto compartido de reporte, el despliegue y la escalabilidad se simplifican para los equipos operativos.

Para conocer más sobre Plaspy y las funciones de la plataforma para visibilidad de flotas y gestión de dispositivos visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, comportamiento de firmware y notas de implementación con el fabricante en https://www.systech-iot.com/ ya que el soporte de protocolo y las funciones de firmware pueden cambiar con el tiempo.
