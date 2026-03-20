---
slug: /coban/bn_303f/protocol
id: bn_303f-protocol
sidebar_label: Protocol
title: Coban - BN-303F Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Coban BN-303F y cómo comunica con Plaspy para seguimiento vehicular fiable
keywords:
  - protocolo Coban BN-303F
  - protocolo GPS BN-303F
  - Coban BN-303F en Plaspy
  - rastreo Coban BN-303F
  - protocolo de rastreador GPS
  - protocolo GPS vehicular
  - rastreo de flotas Coban
  - dispositivos compatibles con Plaspy
  - rastreador 2G GPRS
  - telemetría vehicular Coban
---

# Coban - Protocolo BN-303F

Esta página explica el contexto público del protocolo para usar el Coban BN-303F con Plaspy. Se centra en cómo el BN-303F comunica posiciones GNSS, alarmas y estados al servicio de Plaspy para permitir rastreo en vivo, reproducción histórica y alertas por eventos. El BN-303F (también comercializado como modelo 303FG) es un rastreador 2G compacto para instalación en vehículos, usado en gestión de flotas, antirrobo y monitoreo de alquileres; aquí se describe el contexto de comunicación sin revelar detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento en campo puede diferir ligeramente de esta visión general. Para conectividad, Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888, y los equipos pueden configurarse para usar UDP o TCP en ese mismo puerto.

## Resumen del protocolo

El protocolo de comunicación del BN-303F permite que el dispositivo se identifique, envíe posiciones GNSS y entregue telemetría basada en eventos a un endpoint en la nube como Plaspy. A alto nivel, el protocolo define cómo se inician los mensajes, cómo se reportan eventos como SOS o cambios de ignición, y cómo la plataforma recibe e interpreta esos mensajes para ofrecer telemetría y alertas útiles.

- Facilita la entrega estable de datos de posición y estado desde el rastreador hacia Plaspy para uso en tiempo real e histórico.
- Transporta notificaciones de eventos como SOS, violación de geocerca, encendido ACC, puertas abiertas, exceso de velocidad y batería baja para activar flujos de trabajo en la plataforma.
- Soporta canales de comandos remotos y señales de control que pueden enrutar acciones como corte de energía o combustible cuando están configurados.
- Funciona sobre los métodos de transporte comunes soportados por el equipo para que el rastreador reporte de manera consistente al endpoint de Plaspy.
- Permite a Plaspy mapear la telemetría entrante en alarmas, trayectos e informes para gestores de flota y propietarios de vehículos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría en un endpoint compartido y utiliza detección automática para reconocer mensajes de rastreadores compatibles sin que la mayoría de los usuarios necesiten seleccionar manualmente el protocolo. Cuando un BN-303F se configura para reportar al endpoint de Plaspy, la plataforma empata el flujo entrante con un manejador compatible para que el dispositivo pueda comenzar a reportar sin configuraciones adicionales dentro de Plaspy.

- Plaspy acepta conexiones entrantes en d.plaspy.com y 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y el ruteo.
- Los equipos pueden configurarse para usar TCP o UDP al apuntar al endpoint de Plaspy; Plaspy procesará los reportes independientemente del transporte cuando el dispositivo lo soporte.
- En configuraciones típicas, el usuario no necesita elegir manualmente un protocolo dentro de Plaspy si el rastreador está correctamente apuntado al servidor de Plaspy.
- Si los reportes no comienzan como se espera, verificar la configuración de reporte del dispositivo y el comportamiento del firmware según la documentación del fabricante es el siguiente paso recomendado.

## Contexto de transporte y conexión

Comprender el contexto de transporte ayuda a asegurar la entrega confiable de datos GNSS y de eventos desde el BN-303F hacia Plaspy. El BN-303F soporta transportes de telemetría comunes y puede configurarse para apuntar directamente al dominio del servidor de Plaspy o a su dirección IP en el puerto estándar de Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias locales de configuración.
- Los dispositivos pueden apuntar al servidor de Plaspy por dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy usa un único puerto para todos los dispositivos, lo que simplifica el aprovisionamiento y las reglas de cortafuegos.
- La elección del transporte (UDP vs TCP) suele depender de las opciones de firmware del dispositivo, la confiabilidad de la red y la preferencia del operador.
- Muchos equipos como el BN-303F suelen ofrecer respaldo por SMS para alertas críticas o en zonas con cobertura GPRS limitada, mientras que la telemetría principal se envía por GPRS 2G.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de mensajes, los comandos soportados o el comportamiento en el reporte de eventos; confirme la versión de firmware instalada al validar compatibilidad.
- Las revisiones de hardware y accesorios opcionales, como sensores de combustible o relés, pueden afectar la telemetría disponible y las funciones de control remoto.
- Es posible que se requieran herramientas de configuración del fabricante o comandos por SMS para apuntar correctamente el dispositivo a d.plaspy.com o 54.85.159.138 y para seleccionar TCP o UDP en el puerto 8888.
- Algunas unidades BN-303F pueden comercializarse bajo identificadores alternos como 303FG; siempre verifique números de serie y referencias de pieza.
- La selección del transporte afecta las características de entrega; TCP proporciona fiabilidad en la conexión, mientras que UDP puede ser más liviano según las condiciones de red.
- Valide siempre la operación práctica probando el reporte en vivo y el manejo de eventos con el endpoint de Plaspy después del aprovisionamiento del dispositivo.

## Por qué es importante conocer el protocolo

Tener una comprensión práctica del protocolo de comunicación del BN-303F facilita la configuración inicial, la resolución de problemas y garantiza un funcionamiento fiable a largo plazo cuando el rastreador se usa con Plaspy. Saber cómo reporta el equipo y qué espera la plataforma reduce el tiempo de integración y ayuda a los operadores de flota a mantener telemetría consistente.

- Asegura la configuración correcta del dispositivo para que la telemetría y las alarmas lleguen a Plaspy sin pérdidas.
- Ayuda a diagnosticar problemas de conectividad confirmando el transporte, el endpoint y los modos de reporte.
- Permite tomar decisiones informadas sobre actualizaciones de firmware y compatibilidad de accesorios.
- Reduce el tiempo de inactividad al clarificar cómo se entregan y procesan los reportes basados en eventos en la plataforma.
- Favorece despliegues seguros y predecibles cuando los dispositivos se instalan en flotas o activos de alto valor.

## Por qué usar Plaspy con este protocolo

Usar el BN-303F con Plaspy ofrece a las organizaciones una combinación práctica entre un endpoint telemático compacto y una plataforma en la nube que ingiere y normaliza la telemetría para monitoreo, alertas e informes. La detección automática de protocolos de Plaspy y su modelo de puerto unificado reducen la complejidad de configuración para que equipos como el BN-303F puedan comenzar a reportar con menos pasos manuales, mientras que los paneles y alertas de la plataforma convierten mensajes brutos del dispositivo en información operativa.

Conozca más sobre Plaspy en https://www.plaspy.com y verifique el protocolo específico del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante en el sitio de Coban https://www.coban.net/. El soporte de protocolo y las funciones de firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial del fabricante al planificar despliegues.
