---
slug: /neomatica/adm50/configuration
id: adm50-configuration
sidebar_label: Configuration
title: Neomatica - ADM50 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for Neomatica ADM50 showing Plaspy server settings setup workflow and practical configuration notes
keywords:
  - Neomatica ADM50 configuration
  - Neomatica ADM50 setup
  - ADM50 Plaspy configuration
  - Neomatica GPS tracker setup
  - ADM50 GPS tracker configuration
  - Plaspy tracker integration
  - Plaspy device configuration
  - Neomatica ADM50 server settings
  - ADM50 tracking setup
  - Neomatica ADM50 telemetry setup
---

# Neomatica - ADM50 Configuration

This page covers the public configuration context for using the Neomatica ADM50 personal GPS tracker with Plaspy. It consolidates the Plaspy server settings you will need, explains the typical workflow for making the device report into Plaspy, and highlights practical checks to validate connectivity and visibility on the platform. The ADM50 is a compact battery powered tracker with GNSS positioning, motion detection, panic button events, and local track history—features commonly used with Plaspy for real time tracking and event alerts.

Plaspy relies on shared server settings and uses automatic protocol detection so the same server endpoint and port are used for all supported trackers. Exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. Use the guidance below as a practical public checklist for integrating the ADM50 into Plaspy and always confirm device specifics with Neomatica documentation where necessary.

## Configuration Overview

Preparing an ADM50 for Plaspy involves setting the tracker to report to Plaspy's shared server endpoint, confirming transport settings, and validating that location and event messages are visible in Plaspy. The objective is to ensure reliable GPRS delivery of GNSS coordinates, alarms, and motion events while preserving battery life through appropriate reporting intervals.

- Configure the device to send position and telemetry to Plaspy using the provided server settings.
- Select the transport protocol supported by the device and set the common Plaspy port.
- Verify connectivity from the tracker to the network and confirm messages arrive at Plaspy.
- Tune reporting intervals and alarm behavior for the intended use case to balance granularity and battery life.
- Validate that panic and motion events from the ADM50 are visible in the Plaspy dashboard once reporting is active.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so you only need to point the ADM50 to the Plaspy server endpoint and select the device transport if the device asks for it.

## Typical Requirements Before Setup

- ADM50 powered with a charged battery and accessible for configuration or connected to a host PC via the miniUSB port.
- Active SIM card with a data plan configured in the device if GPRS reporting is required.
- Access to the official Neomatica configuration method or software for the ADM50, or an approved vendor tool.
- Knowledge of the device firmware version and release notes to confirm command support and behavior.
- A valid Plaspy account and the ability to confirm device visibility in the Plaspy interface after configuration.
- Basic network reachability confirmation from the device location to public GSM data networks.

## How This Tracker Connects to Plaspy

The ADM50 transmits GNSS coordinates, event telemetry, and alarm signals over GPRS to the Plaspy server endpoint and port. Plaspy receives these messages, automatically detects the tracker protocol, and maps the incoming telemetry to the device entry in your Plaspy account for live mapping and event handling.

- The tracker is set to report to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on the device option; Plaspy supports both and will auto detect protocol.  
- GNSS positions and LBS assisted fixes are sent as periodic reports based on configured intervals.  
- Panic button presses and accelerometer motion events are forwarded as immediate event messages to Plaspy.  
- Local track history is uploaded or reported as configured, allowing Plaspy to reconstruct routes when connectivity permits.

## Common Configuration Workflow

1. Access the official Neomatica ADM50 configuration method or software using the miniUSB interface or the vendor tool recommended by Neomatica.  
2. In the device network or server settings, enter d.plaspy.com or 54.85.159.138 as the destination server.  
3. Set the device server port to 8888 as required by Plaspy.  
4. If the ADM50 requires transport selection, choose UDP or TCP depending on your preference or installer guidance.  
5. Apply or save the configuration within the device tool or web interface.  
6. Restart or power cycle the ADM50 if the device requires a reboot to apply new network settings.  
7. Validate that the device reports to Plaspy by checking device connectivity and recent position or event messages in your Plaspy account.

## Example Configuration Commands

The ADM50 manufacturer documentation and configuration tools may offer command line, SMS, or tool driven configuration methods. The exact commands and syntax can vary by firmware and tool version. Because public manufacturer commands are not available in this guide, follow the Neomatica configuration utility or official command reference when applying settings for server address and port. In every method you must configure the destination as d.plaspy.com or 54.85.159.138 and set port 8888, and select UDP or TCP if the device requires a transport choice.

If you obtain Neomatica command examples from official sources, use fenced command blocks in your internal documentation and preserve placeholders such as [apn] or [apnu] where they are required by the device command syntax.

## Configuration Notes

- Firmware variations may change command syntax and available options; always confirm the ADM50 firmware version before applying commands.  
- The ADM50 is listed as retired or discontinued by the manufacturer; device availability and firmware support may be limited. Check with Neomatica for archived documentation or firmware.  
- Choose UDP or TCP based on network reliability and installer preference; Plaspy supports both and will auto detect the protocol once messages arrive.  
- All devices in Plaspy use the same port 8888 making bulk provisioning consistent across supported trackers.  
- Manufacturer configuration tools and PC interfaces such as the miniUSB port are the recommended path for initial provisioning and firmware updates.

## Why Use Plaspy with This Configuration

Using the ADM50 with Plaspy provides a straightforward path to obtain real time location, alarm, and motion telemetry for personal and asset tracking scenarios. Plaspy’s ability to automatically detect tracker protocols and accept connections on a shared server endpoint simplifies provisioning and reduces per device configuration complexity, enabling quick visibility into device location and event data for operations and safety monitoring.

To learn more about Plaspy and how it supports trackers like the Neomatica ADM50 visit https://www.plaspy.com. Manufacturer specifications and configuration methods can change over time so verify the latest device specific setup details with Neomatica at https://neomatica.com/ before deployment.
