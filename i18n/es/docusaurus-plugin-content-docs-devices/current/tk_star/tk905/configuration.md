---
slug: /tk_star/tk905/configuration
id: tk905-configuration
sidebar_label: Configuration
title: TK-Star - TK905 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star TK905 con Plaspy usando los ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración TK-Star TK905
  - Configuración TK905 Plaspy
  - Configuración rastreador GPS TK-Star
  - Configuración servidor TK905
  - Comandos SMS TK905
  - Configuración rastreador Plaspy
  - Configuración seguimiento de vehículos
  - Integración rastreador GPS
  - Configuración GPRS TK905
  - Ajustes servidor rastreador
---

# TK-Star - Configuración del TK905

Esta página describe el contexto público de configuración para usar el rastreador TK-Star TK905 con Plaspy. Reúne la información esencial y pública que usted necesita para apuntar el dispositivo a los servidores de Plaspy y validar la conectividad, de modo que el rastreador informe ubicaciones y eventos en Plaspy para su visualización en mapas y gestión de flotas.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante para el TK905 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos y secuencias SMS que aparecen a continuación deben considerarse ejemplos prácticos públicos y no un manual exhaustivo del fabricante.

## Visión general de la configuración

El proceso de configuración prepara el TK905 para comunicarse de forma fiable con la plataforma Plaspy y para aparecer correctamente en los mapas y alertas. Para el TK905 esto normalmente implica ajustar el APN del operador móvil, especificar Plaspy como el endpoint GPRS, seleccionar el modo de transporte si es necesario y habilitar subidas periódicas.

- Configure el APN del dispositivo para que pueda usar datos móviles para reportes GPRS.  
- Apunte el rastreador a los ajustes de servidor de Plaspy para que la plataforma reciba datos de ubicación y eventos.  
- Elija el modo de transporte (UDP o TCP) si el dispositivo requiere selección explícita.  
- Establezca un intervalo de subida adecuado para equilibrar la frecuencia de actualizaciones con el consumo de batería y datos.  
- Opcionalmente, restaure o verifique los valores de fábrica al instalar por primera vez o al solucionar problemas.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un TK905 con batería cargada y acceso a su interfaz de configuración por SMS o a la herramienta o aplicación oficial de TK-Star.  
- Una tarjeta SIM activa y válida con datos y capacidad de SMS instalada en el rastreador y, si corresponde, el PIN desactivado.  
- Datos del APN del operador (nombre del APN y, si es necesario, usuario y contraseña del APN).  
- La contraseña por defecto del dispositivo (la contraseña pública utilizada en los ejemplos es 123456).  
- Acceso a la documentación del fabricante o a recursos de soporte para la revisión de hardware y versión de firmware específica.

## Cómo se conecta este rastreador a Plaspy

El TK905 se configura para enviar fijaciones de ubicación y eventos a Plaspy mediante paquetes GPRS dirigidos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere estas subidas y las presenta como posiciones en tiempo real, alertas de eventos y rutas históricas en la plataforma.

- El rastreador se apunta al endpoint (dominio o IP) y puerto de Plaspy para que las subidas GPRS lleguen a la plataforma.  
- Plaspy recibe paquetes periódicos según el intervalo de subida del rastreador y muestra ubicaciones en vivo.  
- Mensajes de evento como alertas de movimiento y alarmas se reenvían a Plaspy como eventos del dispositivo.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario registrar el protocolo en la plataforma.  
- Usar el puerto y servidor compartidos de Plaspy asegura un manejo consistente entre distintos modelos de rastreadores.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante para el TK905 (comandos SMS, aplicación del proveedor o herramienta oficial) según el manual del dispositivo.  
2. Prepare la información del APN de su operador móvil y la contraseña por defecto del dispositivo (comúnmente 123456 en ejemplos públicos).  
3. Ingrese el dominio d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo solicite la dirección del servidor.  
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere la selección explícita del transporte.  
5. Aplique o guarde la configuración en el dispositivo (envíe los comandos SMS o guarde en la herramienta de configuración).  
6. Reinicie o corte la alimentación del dispositivo si las instrucciones del fabricante recomiendan hacerlo tras la configuración.  
7. Valide que el dispositivo informe a Plaspy confirmando la recepción de posiciones o eventos entrantes en la plataforma.

## Ejemplo de comandos de configuración

El TK905 soporta configuración vía SMS. La secuencia de comandos de ejemplo pública que aparece a continuación usa la contraseña por defecto 123456. Mantenga el mismo orden donde se indica; algunos comandos como la restauración de fábrica son opcionales y solo se recomiendan durante la instalación inicial o al solucionar problemas.

- Optional: restore factory settings (initial setup or troubleshooting)
```text
begin123456
```

- Set operator APN (replace [apn] with your mobile operator APN)
```text
apn123456 [apn]
```

- Set APN username if required by your operator (replace [apnu] with APN username)
```text
apnuser123456 [apnu]
```

- Set APN password if required by your operator (replace [apnp] with APN password)
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port shown in Plaspy documentation
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust value as needed)
```text
upload123456 60
```

- Switch the device to GPRS reporting mode
```text
gprs123456
```

Notas sobre los marcadores: [apn] es la cadena APN del operador móvil, [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Reemplace estos marcadores por los valores proporcionados por su operador.

## Notas de configuración

- La configuración por SMS es de uso común en el TK905; asegúrese de que el SMS se envíe desde un número que el dispositivo acepte o siga las reglas de seguridad indicadas en el manual.  
- Diferentes versiones de firmware o revisiones de hardware pueden cambiar los nombres de los comandos o los parámetros requeridos; verifique los comandos SMS exactos para su unidad antes de aplicar cambios.  
- Elija UDP o TCP según la preferencia del instalador o las condiciones de la red; el servidor Plaspy acepta ambos y detectará el protocolo automáticamente.  
- Plaspy utiliza el mismo puerto 8888 para todos los rastreadores compatibles, por lo que no necesita un puerto distinto por dispositivo.  
- Confirme siempre el APN, usuario y contraseña con su operador móvil antes de configurar el equipo.

## Por qué usar Plaspy con esta configuración

Apuntar un TK-Star TK905 a Plaspy es una forma práctica de integrar las ubicaciones en tiempo real del rastreador, alertas de movimiento y el historial de rutas en un entorno unificado de gestión de flotas. Usar los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifica la incorporación de múltiples dispositivos y reduce la carga de configuración por unidad en flotas mixtas.

Para obtener más información sobre Plaspy e integraciones compatibles, visite https://www.plaspy.com. Para los comandos más recientes específicos del dispositivo, notas de firmware y detalles de hardware del TK905, consulte la documentación del fabricante en https://www.tk-star.com/ ya que los métodos de configuración y el comportamiento pueden cambiar según las revisiones de firmware y hardware.
