---
slug: /autofon/mega_maiak/configuration
id: mega_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Мега-Маяк + Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon Мега-Маяк + connecting to Plaspy with server settings and setup workflow
keywords:
  - AutoFon Мега-Маяк + configuration
  - AutoFon Mega Mayak configuration
  - Мега-Маяк + setup
  - AutoFon tracking configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - GPRS tracker configuration
  - fleet management tracker setup
---

# AutoFon - Мега-Маяк + Configuration

This page documents the public configuration context for using the AutoFon Мега-Маяк + tracker with Plaspy. It covers the shared Plaspy server settings, the practical workflow you will use on the device or manufacturer configuration tool, and the common checks needed to bring the device online so Plaspy can receive telemetry and events.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The Мега-Маяк + is Plaspy compatible out of the box and supports GPRS reporting, dual SIM redundancy, Wi‑Fi and LBS fallback, BLE presence tagging, and SMS as a fallback notification channel; use this guide as a practical reference and consult the device maker for firmware specific instructions.

## Configuration Overview

The goal of configuration is to point the Мега-Маяк + at Plaspy so the tracker reliably reports GNSS fixes, motion and tamper events, and auxiliary inputs. Using the shared Plaspy endpoint and port, the tracker delivers real-time location, telemetry, and buffered black box records to the platform for monitoring, alerts, and history.

- Set the tracker to report to the Plaspy server endpoint so GPRS packets reach the monitoring backend.
- Confirm transport selection and port so the device and Plaspy exchange messages without packet loss.
- Validate network registration and dual SIM failover so reporting continues under variable coverage.
- Verify the device is visible in Plaspy and that events such as SOS, impact, or tamper are received.
- Confirm black box buffering behavior to ensure stored packets synchronize after outages.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the device or manufacturer tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport required by your device configuration interface
- Plaspy automatically detects the tracker protocol so the platform identifies device messages once packets arrive

Note that all devices in Plaspy use the same port 8888 for reporting, which simplifies configuration across multiple tracker models.

## Typical Requirements Before Setup

- Device is powered and has sufficient battery charge or is connected to external power
- Active SIM inserted and registered on a cellular network if using GPRS reporting
- Access to the official AutoFon configuration method or software as provided by the vendor
- Device firmware and hardware revision are noted so you can reference manufacturer guidance
- A means to receive or review device logs or acknowledgements after applying configuration
- Physical access to the device or installer access to complete transport and port selection if required

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Мега-Маяк + typically sends location and event packets over its GPRS connection to the Plaspy server endpoint and port. Plaspy receives GNSS coordinates plus supplemental BLE, Wi‑Fi, LBS, and event telemetry and uses the automatic protocol detection to parse the incoming messages.

- Device reports GNSS fixes and supplemental Wi‑Fi LBS readings to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888
- GPRS is the primary transport channel for real-time telemetry; SMS can be used for fallback notifications depending on device settings
- Motion, tamper, SOS, and auxiliary events are transmitted to Plaspy for immediate alerting and incident workflows
- The device black box buffer holds packets during outages and synchronizes to the Plaspy server once connectivity is restored
- Plaspy automatically detects the tracker protocol and shows the device in the monitoring interface after successful reporting

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software provided by the manufacturer or authorized installer.
2. In the device server settings enter the Plaspy endpoint using either d.plaspy.com or the server IP 54.85.159.138.
3. Set the reporting port to 8888. Remember that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires transport selection based on available firmware or tool options.
5. Apply or save the configuration in the manufacturer tool and confirm that the settings were accepted.
6. Restart the device if the manufacturer documentation or tool requires a reboot for new server settings to take effect.
7. Validate that the device reports to Plaspy by checking for incoming location updates and events in the platform; confirm automatic protocol detection has recognized the tracker.

## Example Configuration Commands

The exact configuration commands and syntax vary by AutoFon firmware and the configuration tool you use. The Mega Becon Plus supports configuration via the official AutoFon software, SMS commands, or GPRS configuration tools depending on the firmware build. Because model specific command sets change between releases, consult the AutoFon documentation or your vendor supplied tool for the precise commands and their order.

If you are using a manufacturer SMS command interface or a vendor tool, follow the vendor instructions to set server domain or IP and the port 8888 and then select UDP or TCP as required. Keep placeholders intact when provided by the vendor for APN credentials such as [apn], [apnu], or [apnp] and replace them with your SIM operator values as instructed by AutoFon.

## Configuration Notes

- Firmware differences can change available configuration options and command syntax; always note firmware version before making changes.
- Dual SIM setups require configuring APN and operator priorities per manufacturer guidance to take advantage of redundant links.
- TCP versus UDP selection depends on the device firmware and installer preference; Plaspy supports both transports and automatically detects protocol.
- Confirm black box buffer behavior and synchronization intervals so historical packets are sent to Plaspy after outages.
- Use the official AutoFon configuration channels for sensitive operations like APN credential changes or OTA firmware updates.

## Why Use Plaspy with This Configuration

Configuring the AutoFon Мега-Маяк + to report to Plaspy provides a practical way to combine long autonomous operation, covert installation features, and robust telemetry with a monitoring platform that automatically recognizes the device protocol. Organizations gain continuous visibility, event-driven alerts, and historical route data while using standardized Plaspy server settings across their device fleet.

To learn more about Plaspy and how the platform can integrate with trackers like the Мега-Маяк + visit https://www.plaspy.com. For the most current device specific configuration steps, firmware behavior, and manufacturer details verify information with the official AutoFon documentation at https://www.autofon.ru/ so your setup matches the device firmware and revision.
