---
slug: /v_sun/v_690/configuration
id: v_690-configuration
sidebar_label: Configuration
title: V-SUN - V-690 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN V-690 y conectarlo a Plaspy, con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración V-SUN V-690
  - Instalación V-SUN V-690
  - V-SUN V-690 Plaspy
  - Configuración rastreador GPS V-SUN
  - Configuración de servidor V-690
  - Software de rastreo V-SUN
  - Configuración plataforma GPS V-SUN
  - Comandos SMS V-690
  - Configuración APN V-SUN
  - Rastreador GPRS V-SUN
---

# V-SUN - V-690 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS V-SUN V-690 con Plaspy. Resume los ajustes prácticos del servidor y los comandos SMS de configuración más comunes publicados para el V-690, de modo que usted pueda preparar el dispositivo para reportar ubicación y eventos básicos a la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos a continuación siguen la secuencia pública de comandos SMS y muestran cómo apuntar el V-690 al endpoint del servidor de Plaspy.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el V-690 para que se comunique de forma fiable con Plaspy y aparezca en la plataforma para su monitoreo y reporte. Usando la interfaz de comandos SMS del equipo, usted normalmente configurará el APN y los valores del servidor GPRS, habilitará los modos de reporte de datos y confirmará que el rastreador esté enviando al endpoint de Plaspy.

- Configure el APN y el servidor GPRS del dispositivo para que el rastreador pueda usar datos móviles y llegar a Plaspy.
- Especifique el endpoint y el puerto del servidor de Plaspy para que los reportes se dirijan a la plataforma correcta.
- Active los modos de reporte GPRS y GPS para que los datos de ubicación se recolecten y transmitan.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de la configuración.
- Use comandos SMS publicados por el fabricante cuando no exista una herramienta de configuración disponible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un V-SUN V-690 con alimentación y una tarjeta SIM instalada que tenga datos móviles habilitados y capacidad de SMS
- Conocimiento del método de configuración por SMS del dispositivo o acceso a la herramienta de configuración del fabricante
- La contraseña del dispositivo si es necesaria para comandos SMS; los ejemplos públicos abajo usan la contraseña por defecto 0000
- Datos del APN del operador móvil para la conectividad de datos
- Acceso a la cuenta o la plataforma Plaspy para verificar que el dispositivo aparezca después de configurar

## Cómo se conecta este rastreador a Plaspy

El V-690 se configura para enviar ubicación y datos básicos del dispositivo al endpoint y puerto compartidos de Plaspy usando sesiones de datos GPRS. Una vez aplicados el APN y los ajustes del servidor y habilitados los modos de reporte, el rastreador transmite paquetes a Plaspy, donde la plataforma detecta el protocolo y procesa las actualizaciones entrantes.

- El rastreador usa el APN configurado para establecer una conexión de datos GPRS
- Los reportes del dispositivo se envían a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y el comportamiento de la red
- Plaspy detecta automáticamente el protocolo del rastreador y acepta datos en el puerto compartido
- Una vez activo el reporte, el dispositivo queda visible para seguimiento y monitoreo en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el V-690, normalmente comandos SMS o software del fabricante, y confirme la contraseña del dispositivo.
2. Introduzca el servidor de Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 en el ajuste del servidor GPRS.
3. Establezca el puerto en 8888 como puerto de destino para todos los dispositivos en Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para el reporte GPRS.
5. Aplique o guarde la configuración en el dispositivo y habilite los modos de reporte GPRS y GPS según sea necesario.
6. Reinicie el dispositivo si el fabricante lo recomienda o si es necesario para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma, comprobando que reciba actualizaciones periódicas.

## Ejemplos de comandos de configuración

El V-690 puede configurarse mediante comandos SMS. Los siguientes comandos SMS son los ejemplos públicos proporcionados por el fabricante. La configuración de muestra usa la contraseña por defecto del dispositivo 0000. Preserve los marcadores de posición tal como se muestran y reemplácelos con los valores de su operador cuando sea necesario.

- Restaurar valores de fábrica (paso inicial opcional)
```text
*RESET#0000##
```

- Establecer el APN del operador
```text
#803#0000#[apn]#[apnu]#[apnp]##
```
Explicación: [apn] es el APN del operador. [apnu] y [apnp] son marcadores opcionales de nombre de usuario y contraseña del APN. Incluya los campos de usuario y contraseña solo si su operador los requiere.

- Establecer el servidor GPRS para usar la IP y el puerto de Plaspy
```text
#804#0000#54.85.159.138#8888##
```
Puede sustituir d.plaspy.com por la IP si lo prefiere y si el dispositivo lo soporta.

- Establecer el intervalo de actualización en movimiento (ejemplo usa 120 segundos)
```text
#805#0000#120#1##
```

- Establecer el intervalo de actualización estático (ejemplo usa 120 segundos)
```text
#809#0000#120#1##
```

- Habilitar modo GPRS
```text
7100000
```

- Habilitar modo GPS
```text
2220000
```

Siga el orden de comandos cuando la secuencia sea importante y reemplace la contraseña por defecto 0000 si su dispositivo tiene otra contraseña.

## Notas de configuración

- Los comandos SMS mostrados aquí son la secuencia de ejemplo públicamente disponible para el V-690; algunas versiones de firmware pueden requerir formatos de comando ligeramente distintos.
- Puede especificar el servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138; ambos deberían apuntar al mismo servicio de Plaspy en el puerto 8888.
- Elija UDP o TCP según las opciones del dispositivo y las condiciones de la red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Preserve los marcadores de posición APN [apn], [apnu] y [apnp] al preparar los comandos y reemplácelos por los valores de su operador según corresponda.
- Si dispone de una herramienta de instalación personalizada de V-SUN o de un proveedor, siga esa herramienta para aprovisionamiento masivo en lugar de usar SMS manual cuando sea posible.

## Por qué usar Plaspy con esta configuración

Configurar el V-SUN V-690 para reportar a Plaspy ofrece a las organizaciones una visibilidad directa de la ubicación y el estado de los dispositivos a través de un único endpoint compartido. El servidor compartido de Plaspy y la detección automática del protocolo reducen la complejidad de configuración por dispositivo y facilitan poner en línea múltiples tipos de rastreadores con ajustes de servidor consistentes.

Learn more about Plaspy and how it can centralize tracking for your fleet or monitoring use cases at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer instructions verify details with V-SUN at http://www.v-sun.cc/ as vendor procedures and firmware implementations may change over time.
