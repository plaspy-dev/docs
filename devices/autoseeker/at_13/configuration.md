---
slug: /autoseeker/at_13/configuration
id: at_13-configuration
sidebar_label: Configuration
title: Autoseeker - AT-13 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Autoseeker AT 13 to the Plaspy platform with server settings and setup workflow
keywords:
  - Autoseeker AT-13 configuration
  - Autoseeker AT-13 setup
  - AT-13 Plaspy integration
  - Autoseeker GPS tracker setup
  - AT-13 server configuration
  - vehicle tracking AT-13
  - Autoseeker tracker configuration guide
  - AT-13 tracking platform setup
  - Plaspy tracker setup
  - GPS tracker AT-13 instructions
---

# Autoseeker - AT-13 Configuration

This page provides the public configuration context for using the Autoseeker AT-13 tracker with the Plaspy platform. It collects the practical, nonproprietary details you need to point an AT-13 at Plaspy and validate that the device is visible in the platform. This is not a replacement for the device manual but a focused guide on the shared server settings and workflow used when integrating the AT-13 with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use the manufacturer documentation and setup tool for the AT-13 to perform device-side configuration, then apply the Plaspy settings described below.

## Configuration Overview

This configuration process prepares the AT-13 to communicate location and status to Plaspy and confirms that the device appears in the platform. The goal is to configure the device network endpoint and transport, validate connectivity, and enable ongoing monitoring via Plaspy.

- Configure the device to report to Plaspy server endpoint and port.
- Choose the transport method supported by the device (UDP or TCP) and apply it.
- Save and apply the settings on the AT-13 using the official manufacturer method.
- Restart or reinitialize the device if required to begin reporting.
- Verify the device appears and reports in Plaspy for operational visibility.

## Plaspy Server Settings

When configuring the Autoseeker AT-13 for Plaspy, use these public server values exactly as shown:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP may be used on port 8888 depending on device configuration
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the shared endpoint Plaspy provides for tracker integration. The AT-13 must be set to report to this endpoint and port for Plaspy to receive telemetry.

## Typical Requirements Before Setup

- Ensure the AT-13 has sufficient power and the internal battery is charged for configuration and testing.
- Confirm you can access the official Autoseeker configuration method or software for the AT-13.
- Have device identification details handy such as IMEI or serial number for registration and validation.
- Obtain any required access credentials or permissions for the configuration tool provided by the manufacturer.
- Ensure the tracker has cellular or other network connectivity available according to the device documentation.
- Prepare a Plaspy account or platform access for validation after the device reports to the server.

## How This Tracker Connects to Plaspy

The Autoseeker AT-13 is configured to send its location and device status to Plaspy by pointing the device network endpoint to the shared Plaspy server and port. Once the tracker communicates with the endpoint, Plaspy detects the protocol automatically and makes the incoming data available in the platform.

- The AT-13 reports to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The tracker uses either UDP or TCP transport as configured on the device.
- Plaspy automatically detects the tracker protocol and decodes incoming telemetry.
- Once connected, the device is visible in Plaspy for location, event, and status monitoring.
- Ongoing reporting allows operational oversight and historical location data on Plaspy.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software for the AT-13 as described in the device manual.
2. In the device server or network settings, enter the Plaspy endpoint using either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888 (this is the same port used for all devices in Plaspy).
4. Choose UDP or TCP if the device requires a transport selection, matching your installation needs.
5. Apply or save the configuration within the Autoseeker tool or device interface.
6. Restart the AT-13 if the manufacturer instructions require a reboot to activate new network settings.
7. Validate that the device reports to Plaspy by checking for the device in the platform and confirming incoming data.

## Example Configuration Commands

The AT-13 configuration method may be performed through the official Autoseeker tool, web configuration interface, or manufacturer-provided commands. Exact commands vary by firmware and the configuration interface used. Plaspy requires that the device point to d.plaspy.com or 54.85.159.138 on port 8888 and that the device transport is set to UDP or TCP as needed. Plaspy will automatically detect the protocol once the tracker sends data to the shared port.

## Configuration Notes

- Firmware differences: command syntax and menu locations can differ between firmware versions; always consult the AT-13 manual for your firmware revision.
- Transport choice: TCP and UDP are both supported by Plaspy on port 8888; pick the transport the device and network favor, and test both if unsure.
- Manufacturer tool: use Autoseeker official tools or documented methods to avoid unsupported configuration sequences.
- Market variations: hardware revisions or vendor-specific firmware may expose different configuration fields or require additional steps.
- Verification: after applying settings, confirm the device is visible and transmitting in Plaspy before final installation.

## Why Use Plaspy with This Configuration

Configuring the Autoseeker AT-13 to report to Plaspy provides a straightforward path to real-time visibility and remote monitoring of vehicles. With the AT-13's compact magnetic form factor and long standby battery, organizations and individuals can deploy discreet tracked assets while relying on Plaspy to collect and present location and status information.

Learn more about how Plaspy supports device integrations and fleet visibility at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information on the Autoseeker website https://autoseekergps.com/.
