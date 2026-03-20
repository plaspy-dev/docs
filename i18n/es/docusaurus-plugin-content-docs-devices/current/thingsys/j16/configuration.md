---
slug: /thingsys/j16/configuration
id: j16-configuration
sidebar_label: Configuration
title: ThingSys - J16 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador ThingSys J16 a Plaspy con ajustes de servidor compartido y configuración por SMS o GPRS
keywords:
  - Configuración ThingSys J16
  - Configuración J16 Plaspy
  - Configuración rastreador J16
  - Configuración servidor Plaspy
  - Comandos SMS rastreador GPS
  - Configuración GPRS J16
  - Configuración rastreador vehicular
  - Configuración protocolo GT06 CRX3
  - Configuración seguimiento de flotas
  - Ajustes APN J16
---

# ThingSys - Configuración del J16

Esta página documenta el contexto público de configuración para usar el rastreador ThingSys J16 con Plaspy. Reúne la información práctica y no propietaria necesaria para apuntar un equipo J16 al endpoint en la nube de Plaspy, explica pasos habituales que puede realizar con las herramientas de ThingSys o por comandos SMS, y señala qué verificar antes de que el dispositivo aparezca en Plaspy. Úsela como referencia concisa para integrar el J16 en una flota gestionada con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El J16 soporta seguimiento GPRS sobre TCP/IP y sondeo por SMS, y por defecto usa familias de protocolo GT06/CRX3, por lo que la guía a continuación se enfoca en aplicar los valores de servidor de Plaspy y validar la conectividad en lugar de entrar en detalles internos exhaustivos del dispositivo.

## Resumen de configuración

El objetivo al configurar un J16 para Plaspy es preparar el dispositivo para enviar de forma fiable su posición y telemetría a los servidores de Plaspy, validar la conectividad y permitir que el rastreador aparezca en su cuenta de Plaspy. Dependiendo de la instalación, la configuración se realiza mediante las herramientas oficiales de ThingSys o enviando comandos SMS según lo permita el firmware del equipo.

- Establecer o confirmar el APN para que el J16 pueda conectarse a la red celular para datos GPRS.
- Configurar el rastreador para reportar al endpoint del servidor Plaspy y al puerto compartido que usa Plaspy.
- Seleccionar y verificar la configuración de transporte (UDP o TCP) si el rastreador requiere una selección de transporte.
- Validar el dispositivo en la plataforma Plaspy para confirmar que el rastreador está enviando paquetes y es detectado automáticamente.
- Registrar cualquier comando SMS o cambio de software y la contraseña por defecto del dispositivo usada durante la configuración.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidores Plaspy al configurar el ThingSys J16:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados e intentará detectar el protocolo automáticamente una vez que reciba paquetes del rastreador.

## Requisitos típicos antes de la configuración

- Un equipo J16 con alimentación y acceso al cableado, y batería interna cargada si lo usa para pruebas sin red.
- Una tarjeta SIM activa con un plan de datos y la información APN correcta del operador móvil.
- Acceso al método de configuración de ThingSys que vaya a utilizar, como el flujo de comandos SMS del fabricante o el software oficial de configuración.
- Conocimiento de la contraseña del dispositivo (contraseña por defecto de ejemplo 123456 según los comandos públicos).
- Un teléfono capaz de enviar SMS al dispositivo o acceso al software del fabricante y conexión serial/USB si procede.
- Una cuenta Plaspy para verificar que el dispositivo aparece y reporta correctamente después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el J16 transmite mensajes de posición y telemetría a Plaspy por GPRS usando TCP/IP o por SMS cuando está soportado. Plaspy recibe esos paquetes en su endpoint y puerto compartidos y aplica detección automática de protocolo para interpretar correctamente perfiles GT06, CRX3 y otros soportados.

- El dispositivo envía paquetes de ubicación y telemetría al endpoint y puerto del servidor Plaspy.
- Plaspy recibe los paquetes en el puerto compartido e identifica automáticamente el protocolo del rastreador.
- Los mensajes de telemetría y eventos se muestran en el panel de Plaspy para monitoreo y alertas.
- El J16 puede almacenar mensajes cuando está fuera de cobertura y reenviar los mensajes guardados cuando vuelve la conectividad.
- Plaspy puede correlacionar la alimentación del J16 con otras fuentes de datos para obtener análisis de flota más completos.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de ThingSys que prefiera, como la configuración por SMS o la herramienta de configuración ThingSys, y confirme la contraseña del dispositivo.
2. Configure el equipo para reportar a Plaspy introduciendo d.plaspy.com o la IP del servidor 54.85.159.138 como destino del servidor.
3. Establezca el puerto en 8888 en los ajustes del rastreador.
4. Seleccione UDP o TCP si el firmware del J16 requiere que elija un protocolo de transporte.
5. Configure el APN del operador y, si es necesario, el nombre de usuario y la contraseña del APN según su proveedor de SIM.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el firmware lo requiere.
7. Valide que el dispositivo reporta a Plaspy comprobando la llegada de paquetes y que Plaspy detecta automáticamente el protocolo del dispositivo.

Si utiliza la configuración por SMS, siga la sintaxis de comandos SMS de ThingSys y confirme los cambios con el comando de verificación descrito más abajo.

## Ejemplos de comandos de configuración

El ThingSys J16 soporta configuración por comandos SMS. Los ejemplos públicos a continuación provienen de la guía pública de ThingSys. El ejemplo usa la contraseña por defecto 123456 cuando es requerida. Envíe estos mensajes SMS al número del dispositivo desde un teléfono autorizado como parte de la configuración inicial.

- Reinicio de fábrica inicial opcional (usar solo si necesita un estado limpio):
```
FORMAT
```
Etiqueta: Reinicio de fábrica inicial opcional. Usar únicamente si necesita restaurar la configuración a valores de fábrica.

- Establecer APN del operador (reemplazar [apn] por el APN de su operador móvil):
```
apn123456 [apn]
```

- Establecer usuario del APN (reemplazar [apnu] por el usuario del APN si es requerido):
```
apnuser123456 [apnu]
```

- Establecer contraseña del APN (reemplazar [apnp] por la contraseña del APN si es requerida):
```
apnpasswd123456 [apnp]
```

- Establecer el servidor GPRS al servidor Plaspy usando la IP y el puerto públicos:
```
ip54.85.159.138 8888
```

- Comprobar ajustes actuales en el dispositivo:
```
CXZT
```

Notas sobre los comandos anteriores:
- La sintaxis SMS y los prefijos de comando reflejan ejemplos públicos de ThingSys. Las cadenas [apn], [apnu] y [apnp] son marcadores que debe reemplazar por los valores y credenciales de su operador.
- El ejemplo usa un comando de servidor basado en IP según la guía pública de ThingSys. Algunas versiones de firmware aceptan un nombre de dominio en lugar de una IP; consulte la documentación de ThingSys para la sintaxis SMS exacta si desea usar un dominio como d.plaspy.com cuando esté soportado.
- La configuración de muestra indica una contraseña por defecto del dispositivo de 123456. Incluya la contraseña en los comandos SMS cuando el firmware y las instrucciones de ThingSys lo requieran.

## Notas de configuración

- Diferencias de firmware y herramientas: Los formatos de comando SMS y los comportamientos de configuración pueden variar entre revisiones de firmware de ThingSys y variantes del dispositivo J16A y J16B.
- Elección de transporte: El dispositivo puede permitir UDP o TCP; elija el transporte requerido por su red y confirme que los paquetes llegan a Plaspy usando el puerto 8888.
- Marcadores de APN: Mantenga los marcadores [apn], [apnu] y [apnp] en los comandos y reemplácelos por los valores específicos del operador al enviar SMS.
- SMS versus software: Si dispone del software de configuración de ThingSys, este puede simplificar la configuración de múltiples equipos. Los comandos SMS son útiles para instalaciones remotas o en campo.
- Verificación: Use el comando de verificación proporcionado y consulte Plaspy para asegurarse de que los paquetes del dispositivo son aceptados y el protocolo es detectado automáticamente.

## Por qué usar Plaspy con esta configuración

Configurar el J16 para reportar a Plaspy ofrece una vía fiable hacia la visibilidad centralizada del vehículo, reporte de eventos y almacenamiento histórico de datos. La conectividad LTE CAT1 con retroceso a 2G, el almacenamiento en áreas sin cobertura y el soporte para protocolos GT06/CRX3 hacen que el J16 sea práctico para despliegues de flota mixtos que requieren monitoreo continuo y respuesta ante incidentes.

Para obtener más información sobre Plaspy y las integraciones de dispositivos soportadas visite https://www.plaspy.com. Para los comandos específicos más recientes del ThingSys J16, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de ThingSys https://www.thingsys.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre confirme el comportamiento del dispositivo con la documentación oficial de ThingSys.
