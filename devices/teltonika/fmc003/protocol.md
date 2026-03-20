---
slug: /teltonika/fmc003/protocol
id: fmc003-protocol
sidebar_label: Protocol
title: Teltonika - FMC003 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Teltonika FMC003 and how it communicates with Plaspy for fleet telemetry and OBD data
keywords:
  - Teltonika FMC003 protocol
  - FMC003 GPS protocol
  - Teltonika GPS tracker protocol
  - FMC003 Plaspy compatibility
  - OBD-II GPS tracker protocol
  - EV telemetry integration
  - fleet tracking protocol
  - telemetry integration Plaspy
  - vehicle tracking protocol
  - FMC003 fleet management
---

# Teltonika - FMC003 Protocol

This page describes the public protocol context for using the Teltonika FMC003 tracker with Plaspy. It focuses on how the tracker communicates in a general, non-sensitive way, how Plaspy receives telemetry, and what to consider when integrating OBD-II sourced data such as odometer, fuel level and EV battery metrics into a fleet management workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly pointed at the Plaspy endpoint. The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138. The port is 8888. The device may be configured using UDP or TCP on port 8888, Plaspy uses the same port for all supported devices, and Plaspy automatically detects the tracker protocol. Exact runtime behavior can vary by firmware version, hardware revision and manufacturer implementation, so those factors can affect what the tracker reports and when.

## Protocol Overview

The communication protocol for the FMC003 defines how the device establishes a connection to the backend, identifies itself, and transmits telemetry and OBD-derived parameters for ingestion by Plaspy. The tracker’s reporting includes GNSS position plus OBD-sourced diagnostics which Plaspy maps into fleet views and reports.

- The protocol enables the device to open a reporting session toward Plaspy and to deliver periodic or event-driven telemetry.
- Identification data from the device allows Plaspy to associate incoming messages with the correct vehicle and configuration profile.
- OBD-derived metrics such as odometer, fuel level and EV battery readings are delivered alongside location and event data for richer analytics.
- Transport selection (UDP or TCP) and network stability influence how frequently and reliably reports arrive at Plaspy.
- The protocol supports remote management workflows when combined with manufacturer tools for configuration and firmware updates.

## How Plaspy Detects the Protocol

Plaspy receives data at a consolidated endpoint and automatically determines the tracker protocol based on the incoming connection and device behavior. In most deployments the user does not need to select a specific protocol inside Plaspy if the FMC003 is correctly configured to report to the Plaspy endpoint.

- Plaspy listens on the shared endpoint d.plaspy.com and IP 54.85.159.138 using port 8888 for tracker connections.
- Devices may use either UDP or TCP on port 8888; Plaspy is prepared to accept both transports on the same port.
- When a device reports, Plaspy matches identification fields from the device to a known device record and applies parsing logic automatically.
- Properly configured devices typically register and begin sending data without manual protocol selection in the platform.
- If a device does not appear to report, checking transport settings, APN configuration and firmware version are practical first steps.

## Transport and Connection Context

Connection context covers how the FMC003 reaches Plaspy and what network settings to confirm during setup. The device’s cellular modem and OBD-II form factor are optimized for rapid deployment, but correct endpoint and transport configuration remains essential for reliable reporting.

- The FMC003 may be configured to use UDP or TCP on port 8888 depending on device settings and operator preference.
- Point the device at the Plaspy endpoint using the domain d.plaspy.com or the IP address 54.85.159.138 as provided by Plaspy.
- Plaspy uses the same port for all devices to simplify deployment and firewall rules; the port is 8888.
- Cellular connectivity choices such as LTE Cat 1 with 2G fallback influence delivery latency and availability in certain regions.
- Validate device APN and reporting interval settings when troubleshooting connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can alter message timing, available OBD parameters and diagnostic fields; always check the installed firmware release.
- Hardware revisions or SKU differences may affect supported cellular bands and regional behavior.
- Manufacturer tools such as Teltonika Configurator and FOTA WEB are useful for applying consistent configuration and updates across fleets.
- Transport selection (UDP vs TCP) may influence reliability under packet loss or mobile handover conditions; match transport to your operational needs.
- The FMC003’s OBD-II form factor provides OEM-level parameters but actual parameter availability depends on the vehicle make, model and ECU implementation.
- Validate compatibility for EV metrics against Teltonika documentation for supported vehicle lists and any required firmware or configuration options.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure reliable device onboarding, consistent telemetry quality and faster troubleshooting when issues arise. Knowing what the tracker sends and how Plaspy receives it reduces integration time and improves long term reliability.

- Enables faster setup by confirming correct endpoint, transport and APN settings before deployment.
- Helps interpret incoming telemetry and confirm OBD parameter availability for specific vehicle models.
- Improves troubleshooting by narrowing focus to network, transport or firmware related causes rather than platform configuration.
- Supports planning for firmware updates and remote configuration to maintain consistent behavior across the fleet.
- Assists in designing alerting and reporting rules in Plaspy that align with device reporting intervals and event types.

## Why Use Plaspy with This Protocol

Using the Teltonika FMC003 with Plaspy provides a streamlined pathway to combine GNSS location with OEM OBD parameters for richer fleet insight. The plug-and-play OBD-II form factor reduces installation time while delivering odometer, fuel and EV battery metrics that feed into Plaspy dashboards for real time monitoring, diagnostics and operational reporting.

To learn more about Plaspy and how it ingests device telemetry visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer documentation verify information on the Teltonika website https://www.teltonika-gps.com/. Protocol support and device implementation can change over time so checking manufacturer resources ensures you have the most current guidance.
