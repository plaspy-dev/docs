---
slug: /totemtech/at09_4g/protocol
id: at09_4g-protocol
sidebar_label: Protocol
title: Totemtech - AT09-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Totemtech AT09 4G GPS tracker compatibility with Plaspy servers and connection settings
keywords:
  - Totemtech AT09-4G protocol
  - AT09-4G Plaspy compatibility
  - Totemtech GPS tracker protocol
  - AT09-4G telemetry reporting
  - vehicle tracking protocol
  - fleet tracking Totemtech
  - GNSS tracker protocol
  - Plaspy device compatibility
  - AT09-4G TPMS telemetry
  - vehicle telemetry protocol
---

# Totemtech - AT09-4G Protocol

This page describes the public protocol context for using the Totemtech AT09-4G tracker with Plaspy. It focuses on how the tracker communicates with Plaspy at a high level, what connection settings are used publicly by Plaspy, and how protocol behavior affects delivery of GNSS, telemetry and alarm data into the platform. Technical readers and administrators will find guidance on the communication role without exposing firmware internals.

The AT09-4G is a rugged 4G tracker built for demanding vehicle environments and provides multi constellation GNSS positioning and rich telemetry such as TPMS and multi channel fuel monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation. Always confirm device specific behavior against the manufacturer documentation for the latest details.

## Protocol Overview

The device protocol is the on device logic and message structure used to report position, sensor states and alarms to a remote server. For the AT09-4G this protocol enables the tracker to identify itself to Plaspy, deliver GNSS coordinates and telemetry, and report events that drive mapping, alerts and historical records.

- Carries position reports and multi constellation GNSS fixes so Plaspy can show live and historical locations.
- Transmits telemetry such as TPMS, fuel sensor readings, digital I O states and alarm events for operational visibility.
- Supports configurable reporting triggers on the device so reporting frequency can balance precision and data usage.
- Enables device identification and basic session handling so Plaspy can associate data with the correct asset.
- May include fallback and auxiliary channels such as SMS or secondary server reporting depending on device configuration.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a unified server endpoint and automatically determines the tracker protocol used by a device. When the AT09-4G is configured to report to Plaspy, the platform uses that incoming traffic to associate data with the correct parser without requiring a manual protocol selection.

- Plaspy listens on the shared server domain d.plaspy.com and also accepts connections sent to 54.85.159.138.
- All devices report to the same network port on Plaspy which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol so users generally do not need to pick a protocol inside the platform when the device reports correctly.
- Proper device configuration on the tracker side is the typical requirement to allow Plaspy to recognize and parse incoming data.
- If you run into detection issues, check device reporting destination, transport type and firmware behavior before changing server side settings.

## Transport and Connection Context

Connection transport is a distinct layer from the protocol itself. The AT09-4G supports standard network transports and can be configured to use either UDP or TCP depending on the device configuration and network conditions. Plaspy documents a single port that all supported devices use, reducing configuration complexity.

- Devices may be configured to use UDP or TCP on port 8888 when sending data to Plaspy.
- The public Plaspy endpoint is available as the domain d.plaspy.com and may also be reached at the IP address 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so the same outbound reporting port can be configured on different tracker models.
- Transport selection can affect delivery characteristics for time sensitive telemetry and should match the device capability and network environment.
- Some devices offer SMS or secondary server reporting as a fallback channel; review device settings if you rely on fallback delivery.

## Protocol Compatibility Notes

- Firmware versions can alter message behavior and available telemetry fields; verify compatibility for the firmware revision installed on your units.
- Hardware revisions and optional peripherals (TPMS modules, LoRa, Bluetooth, camera) can change which telemetry streams are available to Plaspy.
- Configure the device to report to d.plaspy.com or 54.85.159.138 on port 8888 using the transport supported by the unit for reliable ingestion.
- Devices that support simultaneous reporting to two servers may be configured for redundancy; ensure other server settings do not conflict with Plaspy ingestion.
- Manufacturer settings such as reporting triggers, sensor mappings and input wiring affect how data appears in Plaspy and should be validated during setup.
- Always compare device behavior against the manufacturer datasheet and release notes before deploying large fleets.

## Why Protocol Understanding Matters

Knowing how the AT09-4G communicates helps with setup, troubleshooting and ensuring reliable telemetry delivery into Plaspy. Familiarity with connection context and common variability reduces integration time and helps teams tune reporting to their operational needs.

- Faster diagnosis of connectivity issues by confirming server endpoint, transport and port settings on the device.
- Better configuration of reporting triggers to balance data use and tracking precision for fleet costs and performance.
- Informed decisions about using optional peripherals such as TPMS, LoRa nodes or Bluetooth sensors and how their data will flow to Plaspy.
- Clear expectations for firmware updates that may change available telemetry or message timing.
- Easier coordination with manufacturer support when device behavior diverges from expected reporting patterns.

## Why Use Plaspy with This Protocol

Using the Totemtech AT09-4G with Plaspy provides organizations with a consolidated telemetry and location feed that supports fleet monitoring, security workflows and maintenance insights. The AT09-4G’s rugged design, multi constellation GNSS and broad peripheral support make it well suited to mixed fleets and harsh environments while Plaspy ingests those streams for mapping, alerts and reporting.

To learn more about Plaspy and how the platform integrates with devices like the AT09-4G, visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so verify the latest device specific protocol and firmware information on the manufacturer website http://www.totemtek.com/ before large scale deployment.
