---
id: topfly
title: TopFly
sidebar_label: TopFly
sidebar_class_name: menu_item_brand
description: Rastreadores GPS TopFly compatibles con Plaspy para gestión de flotas seguimiento de activos y monitoreo remoto
keywords:
  - TopFly
  - TopFly GPS
  - Dispositivos TopFly
  - Rastreadores TopFly
  - Seguimiento de flotas TopFly
  - Compatible con Plaspy
  - Integración con Plaspy
  - Rastreadores GPS
  - Gestión de flotas
  - Seguimiento de activos
---

import BrandCatalog from '@site/src/components/Devices/BrandCatalog';
import { brand } from './index.js';

<img src={brand.image} alt="TopFly" className="brand-catalog-logo" />

# TopFly

## Resumen
TopFly fabrica hardware de rastreo GPS utilizado en el monitoreo de vehículos y activos. Varios modelos TopFly pueden enviar datos de posición y telemetría a plataformas de terceros, y una selección de equipos TopFly es compatible con Plaspy. En esta página explicamos cómo se integran los dispositivos TopFly con Plaspy, qué puede esperar de estos rastreadores en términos generales y los pasos a seguir para añadir un dispositivo TopFly a su cuenta Plaspy.

## Cómo funcionan los dispositivos TopFly con Plaspy
Los rastreadores TopFly compatibles transmiten datos de ubicación y telemetría que Plaspy recibe, normaliza y muestra en la plataforma. Una vez que un equipo TopFly está configurado para reportar a Plaspy, usted podrá ver la ubicación en tiempo real, reproducir el historial y recibir alertas de eventos dentro de la interfaz de Plaspy junto con dispositivos de otros fabricantes.

La compatibilidad normalmente significa que Plaspy puede interpretar el formato de datos del dispositivo, aceptar los mensajes del rastreador y aplicar funciones de la plataforma como geocercas, alertas e informes. Para ajustes de conexión y formatos de mensaje específicos de cada modelo, consulte la página del dispositivo correspondiente en Plaspy para el modelo TopFly que está utilizando.

## Funciones comunes en dispositivos TopFly
TopFly ofrece varios tipos de rastreadores. Las funciones típicas que suelen estar disponibles en equipos de esta clase incluyen:
- Ubicación GPS en tiempo real y reproducción de historial
- Detección de movimiento y de ignición
- Respaldo de batería y reportes de manipulación
- Conectividad celular integrada para reporte remoto
- Alertas configurables por velocidad, geocerca e inactividad
- Entradas SOS o de pánico en algunos modelos

Las capacidades exactas dependen del modelo. Use el catálogo de modelos abajo para identificar las opciones de hardware que se ajusten a sus necesidades de monitoreo.

## Casos de uso habituales
Los rastreadores TopFly se emplean en diversos escenarios de monitoreo, tales como:
- Flotas comerciales que requieren ubicación de vehículos e historial de rutas
- Seguimiento de activos como remolques, contenedores y equipos
- Supervisión de vehículos de renta o compartidos para control de uso y seguridad
- Rastreo de vehículos personales y monitoreo de seguridad
- Supervisión remota de activos donde exista cobertura celular

Plaspy facilita la visibilidad centralizada y la gestión de reglas en estos casos de uso, de modo que usted pueda tratar el hardware TopFly como cualquier otro dispositivo en su despliegue.

## Por qué elegir Plaspy para monitorear dispositivos TopFly
Plaspy está diseñada para consolidar datos de múltiples marcas de rastreadores en una vista operativa única. Al integrar hardware TopFly con Plaspy usted obtiene:
- Monitoreo unificado en despliegues con equipos de distintos proveedores
- Alertas y notificaciones basadas en eventos del dispositivo
- Informes a nivel de flota y exportación de historial
- Acceso basado en roles y acceso desde escritorio y móvil a los datos de rastreo
- Opciones de integración y APIs para conectar datos con otros sistemas

Si necesita una plataforma única para administrar rastreadores TopFly junto con otros dispositivos, Plaspy ofrece una manera práctica de estandarizar el monitoreo y los informes.

## Ayuda para elegir el dispositivo TopFly adecuado
Use el catálogo de dispositivos más abajo para explorar los modelos TopFly que funcionan con Plaspy. El catálogo muestra los modelos compatibles y enlaza a las páginas de dispositivos en Plaspy donde encontrará instrucciones de conexión, notas sobre el protocolo y opciones de configuración.

Si requiere información del fabricante, visite el sitio de TopFly en https://www.topflytech.com/. Para información sobre la plataforma o para iniciar una prueba, visite https://www.plaspy.com.

<BrandCatalog brand={brand} />

## Preguntas frecuentes

Q: ¿Qué dispositivos TopFly son compatibles con Plaspy?
A: Los dispositivos TopFly compatibles aparecen en el catálogo más arriba. El componente BrandCatalog lista cada modelo TopFly que se conoce que funciona con Plaspy y enlaza a la documentación específica del modelo.

Q: ¿Puedo usar rastreadores GPS TopFly con Plaspy?
A: Sí. Algunos rastreadores TopFly se pueden configurar para reportar a Plaspy. Tras configurar el dispositivo para enviar mensajes al servidor de Plaspy y registrar el equipo en la plataforma, podrá monitorear ubicación, eventos e historial.

Q: ¿Plaspy soporta monitoreo de flotas con dispositivos TopFly?
A: Sí. Plaspy soporta funciones a nivel de flota como vistas agrupadas, alertas e informes para dispositivos que envían datos compatibles. Use la interfaz de Plaspy para gestionar equipos TopFly junto con otros hardware de su flota.

Q: ¿Dónde encuentro la documentación de los dispositivos TopFly en Plaspy?
A: Cada modelo TopFly compatible en el BrandCatalog enlaza a una página de dispositivo en Plaspy con documentación para ese modelo. Las páginas incluyen notas sobre formatos de mensaje, configuraciones comunes y prácticas recomendadas de configuración.

Q: ¿Qué debo hacer si mi dispositivo TopFly no envía datos a Plaspy?
A: Primero confirme la cobertura de red y la alimentación del equipo. Luego revise la página del modelo correspondiente en Plaspy para verificar los ajustes de servidor y el tipo de mensaje correcto. Si el problema persiste, contacte a su distribuidor o al soporte de Plaspy para obtener asistencia.

Q: ¿Puedo mezclar hardware TopFly con otras marcas en la misma cuenta de Plaspy?
A: Sí. Plaspy está diseñada para gestionar flotas heterogéneas, de modo que usted puede operar dispositivos TopFly junto con otras marcas compatibles en una sola cuenta.

## Próximos pasos
Explore los modelos TopFly en el catálogo más arriba para encontrar el rastreador que mejor se adapte a su caso de uso. Al seleccionar un modelo, siga la página del dispositivo en Plaspy para los detalles de configuración y los formatos de mensaje. Para información sobre la plataforma y cómo incorporarse, visite https://www.plaspy.com. Si necesita ayuda para elegir hardware o planificar el despliegue, el soporte de Plaspy y su proveedor de hardware pueden asesorarlo sobre la mejor combinación para sus necesidades.
