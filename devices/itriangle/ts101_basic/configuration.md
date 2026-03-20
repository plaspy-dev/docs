---
slug: /itriangle/ts101_basic/configuration
id: ts101_basic-configuration
sidebar_label: Configuration
title: iTriangle - TS101 BASIC Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for iTriangle TS101 BASIC integration with Plaspy using shared Plaspy server settings
keywords:
  - iTriangle TS101 BASIC configuration
  - iTriangle TS101 BASIC setup
  - TS101 BASIC Plaspy configuration
  - iTriangle tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking configuration
  - TS101 GPS setup
  - Plaspy server configuration
---

# iTriangle - TS101 BASIC Configuration

This page provides the public configuration context for using the iTriangle TS101 BASIC tracker with Plaspy. It summarizes the practical server settings and workflow required to point the tracker at Plaspy and to validate that the device is visible and reporting on the platform. It is intended to help technicians and integrators prepare the device for operation with Plaspy using public information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. All devices in Plaspy use the same port, and the TS101 BASIC may be configured to send data over UDP or TCP to the Plaspy endpoint. Exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools, so always cross-check with iTriangle documentation for device-specific procedures.

## Configuration Overview

This configuration process prepares the TS101 BASIC to communicate reliably with Plaspy, validate connectivity, and make the device visible in the Plaspy platform. The goal is to ensure the tracker reports GNSS fixes and relevant telemetry to Plaspy using the shared Plaspy server endpoint and port.

- Point the device to the Plaspy server endpoint and confirm transport settings.
- Configure network access on the device including SIM and APN as required for 2G TCP/IP operation.
- Save and apply settings, then restart or power-cycle the device if the manufacturer workflow requires it.
- Validate that position and event data reach Plaspy and verify visibility in the platform.
- Use onboard storage and reporting checks to confirm historical points sync after a connectivity gap.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when data is received

These values are the public Plaspy settings to use when configuring the tracker.

## Typical Requirements Before Setup

- A powered TS101 BASIC unit installed or connected to a bench power supply within its supported voltage range.  
- A valid cellular SIM with an active data plan appropriate for the device regional 2G network, if used in cellular mode.  
- Access to the iTriangle official configuration method or software for the TS101 BASIC (manufacturer tool, web interface, or supported provisioning method).  
- Knowledge of the correct APN and any APN credentials required by the SIM provider.  
- A Plaspy account and credentials for validating device visibility on the Plaspy platform.  
- Physical access to the device for rebooting or checking status LEDs as part of verification.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TS101 BASIC sends GNSS fixes and event telemetry to the shared Plaspy server endpoint and port. Plaspy ingests the incoming packets, identifies the tracker protocol automatically, and processes the data for live tracking, historical playback, and alerts.

- The device reports GNSS position fixes and timing to the Plaspy endpoint d.plaspy.com (or 54.85.159.138) on port 8888.  
- Telemetry such as ignition status, digital input events, motion or accelerometer alerts, and I/O state are sent as protocol-specific packets to Plaspy.  
- Onboard storage of historic points holds data during outages and syncs stored records to Plaspy once connectivity resumes.  
- Plaspy uses the same listening port for all supported trackers and detects the incoming protocol automatically to route and decode data.  
- Transport selection on the device (UDP or TCP) should be configured to match the device's capabilities and network conditions.

## Common Configuration Workflow

1. Access the official iTriangle configuration method for the TS101 BASIC (manufacturer web tool, USB/serial tool, or vendor provisioning tool).  
2. In the network or server settings, enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138.  
3. Set the destination port to 8888 as required by Plaspy.  
4. Choose the transport protocol (UDP or TCP) if the device requires explicit transport selection.  
5. Configure any necessary cellular parameters such as APN and APN credentials so the device can establish a data session.  
6. Apply or save the configuration and follow the device instructions to restart or power-cycle the unit if required.  
7. Validate that the TS101 BASIC reports to Plaspy by checking device activity and position updates on the Plaspy platform.

## Example Configuration Commands

This page does not include device-specific commands because the exact configuration method can vary between firmware versions and manufacturer tools. iTriangle devices are commonly configured through a vendor-provided software utility, a serial interface, or an over the air provisioning service. Consult the official iTriangle TS101 BASIC documentation or your vendor provisioning guide for the exact command syntax or GUI steps for setting the server, port, and transport parameters.

## Configuration Notes

- Firmware differences can change how settings are presented in the configuration tool; confirm the device firmware version before applying commands.  
- Choose TCP or UDP on the device based on network reliability and the iTriangle guidance for the TS101 BASIC; Plaspy accepts either transport on port 8888.  
- Because Plaspy uses the same port for all devices, setting port 8888 is sufficient; Plaspy will detect the incoming protocol automatically.  
- Ensure the SIM APN and credentials are correct for cellular operation so the tracker can open a TCP or UDP session to d.plaspy.com.  
- Installer practices and regional cellular banding or carrier restrictions can affect connectivity; verify local network compatibility for 2G where applicable.

## Why Use Plaspy with This Configuration

Using the iTriangle TS101 BASIC with Plaspy provides a straightforward path to real-time vehicle visibility, telemetry ingestion, and event-driven monitoring. The TS101 BASIC’s onboard storage and multi-constellation GNSS support help maintain continuity of tracking, while Plaspy’s automatic protocol detection and shared server settings simplify multi-device deployments.

To learn more about Plaspy and how it manages device connectivity and fleet data, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the iTriangle website https://www.itriangle.net/ before applying configuration in production.
