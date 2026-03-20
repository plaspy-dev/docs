---
slug: /astra_telematics/at241/configuration
id: at241-configuration
sidebar_label: Configuration
title: Astra Telematics - AT241 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Astra Telematics AT241 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Astra Telematics AT241 configuración
  - Configuración AT241 Plaspy
  - AT241 configuración de servidor
  - Configuración tracker GPS AT241
  - Astra Telematics configuración
  - Configuración de dispositivo Plaspy
  - Configuración tracker GPS Plaspy
  - Tracker vehicular AT241
  - AT241 configuración SMS
  - Tracker de flota AT241
---

# Astra Telematics - Configuración del AT241

Esta página documenta el contexto público de configuración para usar el Astra Telematics AT241 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en ejemplos de comandos que puede usar para apuntar el dispositivo a Plaspy, de modo que el tracker reporte ubicación, telemetría y eventos a la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos de configuración en el lado del fabricante para el AT241 pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; esta página resalta los ajustes públicos más comunes y un flujo de comandos via SMS que suele incluir la documentación del dispositivo.

## Resumen de la configuración

El objetivo de la configuración es preparar el AT241 para que se comunique de forma confiable con el endpoint de Plaspy y aparezca en su cuenta para seguimiento y reportes en tiempo real. En muchas implementaciones el AT241 se configura con las herramientas del fabricante o mediante comandos SMS para establecer el APN del operador, la dirección del servidor y el puerto, de modo que los enlaces GPRS o LTE entreguen la telemetría a Plaspy.

- Configure el APN del dispositivo y, si el operador lo requiere, el nombre de usuario y la contraseña del APN.
- Configure el dispositivo para que reporte al servidor Plaspy usando el dominio o IP del servidor y el puerto compartido de Plaspy.
- Seleccione UDP o TCP en el dispositivo si requiere elegir el transporte; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Verifique que el tracker establezca una sesión de datos GPRS o celular, reporte ubicación y aparezca en Plaspy.
- Use SMS o las herramientas del proveedor para aplicar ajustes cuando el dispositivo no esté conectado a un teléfono o a un interfaz USB.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el dispositivo
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un dispositivo AT241 alimentado e instalado correctamente o accesible para la configuración inicial.
- Una SIM celular operativa con un plan de datos activo y capacidad de SMS si planea usar comandos por SMS.
- Acceso al método de configuración del fabricante, por ejemplo comandos SMS, app móvil del proveedor o la herramienta de PC suministrada por Astra Telematics.
- Datos del APN del operador móvil, incluyendo nombre de usuario y contraseña cuando sean necesarios.
- Una cuenta Plaspy y acceso a la plataforma para verificar el reporte del dispositivo y validar la ingesta de datos.
- Conocimientos básicos sobre si usar UDP o TCP en su despliegue; el dispositivo puede requerir una selección explícita.

## Cómo se conecta este tracker a Plaspy

Cuando está configurado con los ajustes del servidor Plaspy, el AT241 usa su enlace celular para abrir una conexión al endpoint compartido de Plaspy y transmitir eventos GNSS y de E/S. Plaspy ingiere esos paquetes y mapea los eventos del dispositivo en funciones de seguimiento en vivo, geovallas y reportes.

- El tracker se apunta al endpoint de Plaspy d.plaspy.com o directamente a 54.85.159.138 y envía datos al puerto 8888.
- El dispositivo puede usar transporte UDP o TCP según su configuración; Plaspy acepta ambos y detecta automáticamente el protocolo en uso.
- Las actualizaciones de ubicación, eventos de movimiento y E/S, y las alarmas se envían a Plaspy para visualización en tiempo real y reproducción histórica.
- Mensajes regulares de conectividad y latidos permiten a Plaspy determinar el estado en línea del dispositivo y apoyar el monitoreo operativo.
- Tras una configuración y registro en la red exitosos, el dispositivo debería aparecer en Plaspy y comenzar a reportar.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Astra Telematics, como la interfaz de comandos SMS, la herramienta móvil del proveedor o la utilidad de PC.
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Establezca el puerto del servidor a 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP en el dispositivo si se requiere elegir el transporte.
5. Configure el APN del operador y, cuando sea necesario, el usuario y la contraseña del APN para que el dispositivo pueda abrir una sesión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado y la ubicación en su cuenta Plaspy.

## Comandos de configuración de ejemplo

La documentación del AT241 incluye un conjunto de comandos por SMS para la configuración básica de red y servidor. Estos comandos se envían como mensajes SMS de texto plano al número telefónico del dispositivo. Conserve los marcadores de posición cuando sustituya valores reales.

1. Establecer el APN del operador
```
$APAD,[apn]
```

2. (Opcional) Establecer el nombre de usuario del APN si el operador lo requiere
```
$APUN,[apnu]
```

3. (Opcional) Establecer la contraseña del APN si el operador lo requiere
```
$APPW,[apnp]
```

4. Establecer el servidor GPRS a la IP del servidor Plaspy
```
$IPAD,54.85.159.138
```

5. Establecer el puerto del servidor al puerto compartido de Plaspy
```
$PORT,8888
```

Notas sobre los marcadores de posición:
- [apn] es el nombre del APN del operador móvil requerido para la sesión de datos celular.
- [apnu] es el usuario del APN si el operador requiere autenticación.
- [apnp] es la contraseña del APN si es necesaria.
- Los comandos de usuario y contraseña del APN son condicionales y solo se necesitan cuando su operador usa autenticación APN.

## Observaciones sobre la configuración

- Las diferencias de firmware y de herramientas pueden modificar la sintaxis exacta de los comandos y los pasos de reinicio requeridos; confirme siempre los comandos según la versión de firmware del dispositivo.
- La configuración por SMS es útil para dispositivos en campo sin conexión directa a software, pero las herramientas de PC o las apps móviles del proveedor pueden ofrecer configuración masiva y verificación para instalaciones de flota.
- Al elegir TCP frente a UDP considere las restricciones de su red y el comportamiento del firmware del dispositivo; Plaspy aceptará cualquiera y detecta el protocolo automáticamente, pero algunas implementaciones prefieren un transporte por razones de firewall o fiabilidad.
- Todas las integraciones con Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento de dispositivos en flotas grandes.
- Verifique los detalles del APN del operador y pruebe la conectividad de datos antes de depender del reporte automatizado.

## Por qué usar Plaspy con esta configuración

Usar el AT241 con Plaspy ofrece a gerentes de flota y operadores de activos un camino sencillo para obtener visibilidad en tiempo real de ubicación y eventos. El diseño robusto del AT241, su flexibilidad de E/S y el soporte de múltiples generaciones celulares lo hacen apto para instalaciones exigentes en vehículos y equipos, mientras que apuntarlo a Plaspy permite la ingesta inmediata de coordenadas GNSS, eventos de movimiento y condiciones de alarma en un flujo centralizado de gestión de flota.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para las instrucciones específicas del dispositivo y notas de firmware más recientes consulte el sitio del fabricante https://astratelematics.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, así que confirme los detalles de la configuración más actuales en la documentación oficial de Astra Telematics antes de despliegues a gran escala.
