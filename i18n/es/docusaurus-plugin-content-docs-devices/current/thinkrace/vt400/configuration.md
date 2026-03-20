---
slug: /thinkrace/vt400/configuration
id: vt400-configuration
sidebar_label: Configuration
title: ThinkRace - VT400 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThinkRace VT400 para conectar con Plaspy usando servidor compartido y comandos SMS de ejemplo
keywords:
  - Configuración ThinkRace VT400
  - Instalación ThinkRace VT400
  - Configuración servidor VT400
  - Integración VT400 Plaspy
  - Rastreador GPS VT400
  - Configuración ThinkRace OBD
  - Configuración rastreo vehicular
  - Ajustes servidor rastreador GPS
  - Configuración rastreador Plaspy
  - Seguimiento de flotas VT400
---

# ThinkRace - VT400 Configuración

Esta página explica el contexto público de configuración para usar el rastreador ThinkRace VT400 con Plaspy. Incluye los ajustes de servidor compartido de Plaspy y recomendaciones prácticas basadas en comandos públicos y ejemplos de configuración del fabricante. Use esta guía para comprender la conexión y los pasos comunes necesarios para que su VT400 informe a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo dentro de la plataforma. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran en esta página reflejan ejemplos públicos y deben verificarse con la versión de firmware del equipo y la documentación de ThinkRace.

## Resumen de configuración

El objetivo al configurar un VT400 para Plaspy es apuntar el rastreador al servidor de Plaspy, asegurar que el equipo tenga conectividad de red y confirmar que el dispositivo aparece en la plataforma Plaspy. Los siguientes puntos resumen los objetivos prácticos del proceso de configuración.

- Configurar el equipo para que utilice los ajustes del servidor Plaspy y así enviar ubicación y eventos a la plataforma.  
- Establecer el APN y parámetros celulares correctos para que el rastreador tenga conexión de datos funcional.  
- Validar transporte y puertos para permitir que el rastreador abra sesiones hacia Plaspy.  
- Confirmar que el dispositivo es visible en Plaspy y reporta actualizaciones de GPS y estado esperadas.  
- Usar las herramientas recomendadas por el fabricante o comandos SMS para aplicar y verificar los ajustes.

## Ajustes del servidor Plaspy

Al configurar el VT400 para que informe a Plaspy, utilice los siguientes ajustes públicos del servidor Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (used by Plaspy for all devices)  
- Transport support: UDP or TCP (the device may be configured to use either transport)  
- Plaspy automatically detects the tracker protocol so manual protocol selection inside Plaspy is not required

## Requisitos típicos antes de la configuración

- Verifique que el VT400 esté correctamente instalado en el puerto OBD II del vehículo y que tenga alimentación.  
- Una SIM celular activa con datos habilitados y el APN correcto para su operador móvil.  
- Acceso al método de configuración ThinkRace que planea utilizar (comandos SMS o la herramienta del fabricante).  
- La contraseña del dispositivo si el equipo la solicita para la configuración por SMS (en los ejemplos públicos se muestra la contraseña de muestra por defecto).  
- Un método para recibir o visualizar las respuestas del dispositivo (respuesta SMS del equipo o retroalimentación de la herramienta de configuración) para la verificación.  
- Acceso administrativo a su cuenta Plaspy o la persona encargada de agregar y validar el equipo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El VT400 envía ubicación y estado del dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma muestre posiciones en tiempo real, historial y alertas. El flujo de conexión general y el comportamiento de reporte se resumen a continuación.

- El rastreador establece una conexión GPRS o de datos móviles usando el APN y ajustes del operador configurados.  
- Abre una conexión a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP según la configuración del equipo.  
- El VT400 transmite paquetes de posición y eventos al servidor Plaspy; Plaspy detecta automáticamente el protocolo utilizado por el dispositivo.  
- Plaspy ingiere los datos entrantes para que el dispositivo sea visible en la plataforma, permitiendo seguimiento en vivo, reproducción de historial y notificaciones.  
- Latidos regulares y mensajes de evento permiten monitoreo operativo y resolución de problemas desde la interfaz de Plaspy.

## Flujo de trabajo común de configuración

Siga estos pasos prácticos para configurar un VT400 y que reporte a Plaspy. Adapte las instrucciones según su método de instalación y firmware.

1. Acceda al método oficial de configuración ThinkRace para su VT400, por ejemplo comandos SMS o la herramienta provista por el fabricante.  
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 según lo permita el equipo.  
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Elija UDP o TCP como transporte en el dispositivo si el rastreador requiere selección de transporte.  
5. Configure el APN y cualquier credencial de SIM necesaria para que el equipo pueda abrir una sesión de datos.  
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios se apliquen.  
7. Valide que el VT400 reporte a Plaspy verificando que el dispositivo aparezca en la plataforma y envíe actualizaciones de posición.

## Comandos de configuración de ejemplo

El ThinkRace VT400 puede configurarse mediante comandos SMS en muchas instalaciones. Los siguientes comandos de ejemplo públicos se ofrecen como referencia limpia basada en ejemplos del fabricante. Conservan la contraseña de muestra por defecto y marcadores de posición.

- Nota: la configuración de ejemplo usa la contraseña del dispositivo 888888 en los comandos de muestra a continuación. Tome esto en cuenta y reemplace por la contraseña de su equipo si es distinta.

1) Establecer el APN del operador (usuario y contraseña del APN son opcionales). Reemplace los marcadores con los valores de su operador.

```
(Set,888888,apn,[apn])
```

O si su operador requiere usuario y contraseña del APN:

```
(Set,888888,apn,[apn],[apnu],[apnp])
```

- [apn] = el APN de su operador móvil  
- [apnu] = usuario APN opcional si el operador lo requiere  
- [apnp] = contraseña APN opcional si el operador lo requiere

2) Configure el servidor GPRS para apuntar a Plaspy (use el dominio o la IP según lo permita el equipo).

```
(Set,888888,server,54.85.159.138,8888)
```

Alternativamente, muchos dispositivos aceptan la forma con nombre de dominio. Si el rastreador acepta nombres de dominio, puede establecer:

```
(Set,888888,server,d.plaspy.com,8888)
```

- Reemplace 888888 con la contraseña del dispositivo si su unidad usa una contraseña distinta.  
- Envíe estos comandos como SMS al número del equipo o a través del canal de configuración del fabricante según corresponda.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o las opciones disponibles; siempre verifique las notas de firmware del dispositivo.  
- El ejemplo anterior muestra configuración por SMS, la cual es común en dispositivos ThinkRace; algunos proveedores también ofrecen herramientas para PC o portales web que permiten aplicar los mismos ajustes.  
- Elija UDP o TCP según la preferencia del instalador y las capacidades del dispositivo; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.  
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no necesita un puerto Plaspy específico por modelo.  
- Si el dispositivo requiere reinicio para aplicar los ajustes de servidor o APN, realice el reinicio y luego valide los reportes en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el ThinkRace VT400 ofrece una forma sencilla de centralizar la ubicación de vehículos, el historial de viajes y las notificaciones de eventos. Apuntar el VT400 al servidor compartido de Plaspy y verificar el APN y los ajustes de servidor permite que el equipo transmita datos a la plataforma, donde los operadores pueden monitorear la actividad y revisar rutas históricas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para instrucciones de configuración específicas más recientes, cambios de firmware y documentación detallada de ThinkRace, consulte la información del fabricante en https://www.thinkrace.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
