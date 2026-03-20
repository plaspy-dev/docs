---
slug: /thingsys/ts_v6w/configuration
id: ts_v6w-configuration
sidebar_label: Configuration
title: ThingSys - TS-V6W Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys TS-V6W para conectarlo a Plaspy usando servidor compartido y comandos SMS GPRS
keywords:
  - Configuración ThingSys TS V6W
  - Configuración TS V6W Plaspy
  - Configuración servidor TS V6W
  - Configuración rastreador GPS TS V6W
  - Configuración SMS TS V6W
  - Integración rastreador Plaspy
  - Seguimiento vehicular TS V6W
  - Configuración GPRS TS V6W
  - Configuración rastreador ThingSys
  - Configuración rastreador GPS Plaspy
---

# ThingSys - Configuración del TS-V6W

Esta página ofrece el contexto público de configuración para usar el rastreador GPS vehicular ThingSys TS-V6W con Plaspy. Resume los ajustes de servidor prácticos y los pasos de configuración más comunes para apuntar un TS-V6W a Plaspy y habilitar seguimiento en tiempo real, reenvío de alarmas y monitoreo de flotas. Siempre que estén disponibles, se incluyen ejemplos públicos de comandos SMS y GPRS documentados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; trate los comandos aquí como referencia pública y verifique detalles específicos del dispositivo en la documentación de ThingSys cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TS-V6W para enviar datos de ubicación y eventos a Plaspy de forma fiable vía GPRS o SMS, validar la conectividad y habilitar la visibilidad en la plataforma. El TS-V6W soporta métodos de configuración por SMS y GPRS y puede apuntarse a los ajustes de servidor compartidos de Plaspy para un seguimiento continuo.

- Configure el APN y las credenciales de red para que el rastreador pueda acceder a datos móviles.
- Establezca la dirección y el puerto del servidor del rastreador hacia el endpoint de Plaspy para que los datos se envíen a la plataforma.
- Seleccione UDP o TCP en el dispositivo si el firmware lo requiere.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con posición en vivo o mensajes de latido.
- Use comandos SMS del fabricante para configuración remota cuando no sea posible el acceso local por software o puerto serial.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Un TS-V6W con alimentación y acceso del instalador a su cableado y fuente de energía.
- Una tarjeta SIM activa con plan de datos y capacidad de SMS configurada con el APN correcto del operador móvil.
- Capacidad para enviar comandos SMS al dispositivo o acceso al software de configuración provisto por ThingSys.
- Conocimiento de la contraseña del dispositivo si los comandos SMS requieren autenticación (la configuración de ejemplo abajo usa la contraseña por defecto mostrada en los comandos públicos).
- Una cuenta en Plaspy y acceso a la plataforma para validar que el dispositivo está reportando después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TS-V6W se configura para enviar mensajes de ubicación y eventos al endpoint y puerto del servidor de Plaspy para que la plataforma pueda mostrar posiciones en vivo, generar alarmas y archivar el historial de rutas. Plaspy recibe seguimiento por GPRS o mensajes SMS y convierte la telemetría en datos útiles para gestión de flotas.

- El dispositivo envía mensajes de posición y alarma al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El rastreador puede usar transporte UDP o TCP para conectarse al puerto 8888; Plaspy acepta ambos y detecta automáticamente el protocolo del dispositivo.
- Eventos como estado de encendido, exceso de velocidad, vibración y otras alertas se reenvían a Plaspy para alertas en tiempo real e informes.
- Mensajes de latido y estado permiten a Plaspy monitorear la disponibilidad y conectividad del TS-V6W.
- Tras una configuración exitosa, el dispositivo debería aparecer en Plaspy con actualizaciones en vivo o telemetría reciente en la interfaz de la plataforma.

## Flujo de configuración común

1. Acceda al método de configuración oficial de ThingSys para el TS-V6W (comandos SMS o software del proveedor) y confirme la contraseña del dispositivo y las funciones soportadas por el firmware.
2. Configure el APN, el usuario APN y la contraseña APN para la SIM instalada para que el rastreador pueda iniciar una sesión GPRS.
3. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 como dirección del servidor del rastreador.
4. Ajuste el puerto del servidor a 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos soportados.
5. Elija UDP o TCP en los dispositivos que requieran selección de transporte, o use el transporte por defecto del firmware.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo necesita un reboot para aplicar ajustes de red.
7. Valide que el dispositivo reporta a Plaspy confirmando que aparece en la plataforma y envía mensajes de posición o latido.

## Ejemplos de comandos de configuración

El TS-V6W soporta configuración por SMS. Los siguientes comandos SMS públicos son ejemplos documentados. Estos comandos se envían al número SMS del dispositivo y usan la contraseña del equipo cuando se requiere. El ejemplo usa la contraseña por defecto 123456 indicada en el ejemplo público.

- Restauración de fábrica (paso inicial opcional)
```text
FORMAT
```

- Configurar el APN del operador (reemplazar {{apn}} por el APN del operador)
```text
apn123456 {{apn}}
```

- Establecer el usuario APN (reemplazar {{apnu}} por el usuario APN si es necesario)
```text
apnuser123456 {{apnu}}
```

- Establecer la contraseña APN (reemplazar {{apnp}} por la contraseña APN si es necesaria)
```text
apnpasswd123456 {{apnp}}
```

- Establecer el servidor GPRS al endpoint de Plaspy (este ejemplo usa la IP y el puerto del servidor)
```text
ip54.85.159.138 8888
```

- Consultar ajustes actuales
```text
CXZT
```

Notas sobre los marcadores y comandos:
- {{apn}} es la cadena APN del operador móvil necesaria para acceso a internet.
- {{apnu}} es el usuario APN si la SIM lo requiere; deje en blanco si no es necesario.
- {{apnp}} es la contraseña APN si la SIM la requiere; deje en blanco si no es necesario.
- El comando ip54.85.159.138 8888 configura el dispositivo para usar la IP y el puerto del servidor Plaspy según lo indicado en la configuración pública. Algunos instaladores prefieren usar el dominio d.plaspy.com cuando el firmware del equipo soporta dominios; siga la documentación de ThingSys para soporte de dominios.

## Notas de configuración

- Variaciones de firmware pueden cambiar la sintaxis exacta de los SMS o la autenticación requerida. Confirme el formato de comandos según la revisión de firmware del TS-V6W.
- El dispositivo soporta configuración vía SMS como se muestra; también pueden estar disponibles herramientas del proveedor o métodos de configuración serial que facilitan aprovisionamiento masivo.
- Cuando el firmware requiera seleccionar el transporte, elija UDP o TCP de forma coherente con sus reglas de red y firewall; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que no es necesario un mapeo de puertos por dispositivo en la plataforma.
- Si realiza un reseteo de fábrica con FORMAT, trátelo como un paso opcional inicial para borrar configuraciones previas antes del aprovisionamiento.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys TS-V6W con Plaspy ofrece a gestores de flota y equipos de seguridad una vía directa para reunir ubicación continua, alarmas y telemetría básica en una sola plataforma. Con ajustes de servidor compartidos y detección automática de protocolo en Plaspy, puede estandarizar el aprovisionamiento en su flota y reducir la complejidad de configuración por dispositivo.

Learn more about Plaspy and how it integrates with compatible trackers on the Plaspy website https://www.plaspy.com. For the most current device specific commands, firmware behavior, and installation details consult the official ThingSys documentation at https://www.thingsys.com/ to verify the latest setup information.
