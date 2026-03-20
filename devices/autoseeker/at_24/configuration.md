---
slug: /autoseeker/at_24/configuration
id: at_24-configuration
sidebar_label: Configuration
title: Autoseeker - AT-24 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Autoseeker AT-24 to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - Autoseeker AT-24 configuration
  - Autoseeker AT-24 setup
  - AT-24 server configuration Plaspy
  - AT-24 GPS tracker configuration
  - Plaspy tracker setup
  - Autoseeker GPS configuration
  - vehicle tracker AT-24 setup
  - AT-24 immobilizer configuration
  - AT-24 geofence setup
  - fleet tracking AT-24
---

# Autoseeker - AT-24 Configuration

This page covers the public configuration context for using the Autoseeker AT-24 tracker with Plaspy. It consolidates the shared Plaspy server settings and practical setup guidance you will use when configuring the AT-24 so it reports location and event data to the Plaspy platform. The guidance here is intended for technical installers and fleet managers preparing devices for integration.

Plaspy accepts connections from supported devices using a common server endpoint and shared port, and it automatically detects the tracker protocol. Manufacturer-side steps to apply those settings can vary by AT-24 firmware, hardware revision, installation type, and vendor configuration tools. Review this page alongside the AT-24 manufacturer documentation for device specific commands and firmware notes.

## Configuration Overview

The goal of the configuration process is to prepare the AT-24 to communicate reliably with Plaspy so that location, ignition and alarm events appear in the platform in real time. You will point the tracker to Plaspy’s server endpoint and ensure the device has an active mobile data connection and the correct transport settings.

- Configure the tracker to send telemetry to Plaspy using the provided server endpoint and port.
- Ensure the device has an active SIM and data service and that APN settings are correct for the installed SIM.
- Validate that the AT-24 reports position and event messages after configuration so the device appears in Plaspy.
- Save and apply the settings on the AT-24 and restart the device if the manufacturer procedure requires it.
- Use manufacturer tools or SMS configuration methods where supported to enter server and transport values.

## Plaspy Server Settings

- Server domain d.plaspy.com must be used as the platform endpoint.
- Server IP 54.85.159.138 may be used where an IP address is required.
- Port 8888 is the listening port Plaspy uses for device reports.
- Transport support for UDP or TCP is available; choose the transport required by the device if it asks.
- Plaspy performs automatic protocol detection to accept and interpret the tracker protocol.
- All devices in Plaspy use the same port so you can reuse port 8888 for AT-24 and other compatible trackers.

## Typical Requirements Before Setup

- A powered AT-24 device installed or temporarily bench powered with its wiring connected per the manufacturer installation guide.
- An active SIM card with a mobile data plan and correct APN settings for the mobile operator.
- Access to the official AT-24 configuration method such as the manufacturer configuration tool, SMS commands, or vendor provisioning software.
- Confirmed ability to enter a server domain or IP and a numeric port value in the device configuration.
- A brief inspection of antenna placement and backup battery charge to ensure reliable GNSS and cellular reporting.
- Access to Plaspy account details so you can verify the device appears and reports in the platform after configuration.

## How This Tracker Connects to Plaspy

When configured, the AT-24 will stream position and event telemetry over cellular data to the Plaspy server endpoint and port. Plaspy ingests those messages and maps them into real-time location, event alerts, and historical records on the platform.

- The tracker is set to report to the shared Plaspy endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Data transport may use UDP or TCP depending on the tracker configuration and firmware; Plaspy will accept either and auto detect the protocol.
- Standard events such as ACC ignition on/off, geofence triggers, overspeed and low-battery alerts are reported to Plaspy for alerting and auditing.
- Remote immobilizer and other control events are reflected as status and command-capable items where supported by the AT-24 and the operator workflow.
- Successful connection and reporting make the device visible in Plaspy dashboards and enable real-time monitoring and historical reporting.

## Common Configuration Workflow

1. Access the official Autoseeker AT-24 configuration method or software provided by the manufacturer or vendor.
2. Verify the device has a working SIM card and correct APN settings if required by the mobile operator.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server field.
4. Set the device port to 8888 as the destination port for reports.
5. Choose UDP or TCP transport if the AT-24 requires selecting a transport protocol.
6. Apply or save the configuration on the device and perform a restart if the manufacturer instructs doing so.
7. Validate that the AT-24 reports to Plaspy by confirming the device appears and sends telemetry to the Plaspy platform.

## Example Configuration Commands

The AT-24 manufacturer and vendor tools determine the exact command syntax and method used to configure server and transport settings. The precise SMS commands, configuration strings, or desktop tool steps can vary by firmware version and provisioning software. In practice you will use the device configuration interface to set:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138 (if an IP is required)
- Port: 8888
- Transport: UDP or TCP

Always consult the AT-24 user manual or your vendor provisioning guide for the exact commands or SMS syntax to set those values for your device and firmware version.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available configuration options; confirm commands with the manufacturer documentation.
- Choose UDP or TCP based on the device firmware recommendation; Plaspy accepts both and automatically detects the tracker protocol on arrival.
- Ensure APN, SIM data, and signal quality are validated before relying on the platform for live monitoring.
- When using SMS configuration, preserve any required command placeholders and verify success responses from the device.
- Keep the device backup battery charged and confirm ignition and immobilizer wiring follow recommended installation practices.

## Why Use Plaspy with This Configuration

Using the Autoseeker AT-24 with Plaspy gives fleets and asset operators a practical path to continuous location visibility, event-driven alerts, and remote operational controls. The AT-24’s compact form factor, wide input voltage range, and backup battery help ensure reliable reporting from concealed installations, while Plaspy provides the platform to collect, alert on, and report that telemetry for operational oversight and theft response.

Learn more about Plaspy on the main website https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest AT-24 setup instructions and command syntax on the official manufacturer site https://autoseekergps.com/ to ensure the most current and accurate configuration information.
