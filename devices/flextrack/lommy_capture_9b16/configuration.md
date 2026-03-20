---
slug: /flextrack/lommy_capture_9b16/configuration
id: lommy_capture_9b16-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Capture 9B16 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the Flextrack Lommy Capture 9B16 tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - Flextrack Lommy Capture 9B16 configuration
  - Lommy Capture Plaspy setup
  - Lommy Capture server configuration
  - trailer GPS tracker configuration
  - Plaspy tracker setup guide
  - Lommy Capture installation tips
  - Plaspy fleet integration
  - asset tracking configuration
  - Lommy Capture connectivity
  - Plaspy device configuration
---

# Flextrack - Lommy Capture 9B16 Configuration

This page documents the public configuration context for using the Flextrack Lommy Capture 9B16 with Plaspy. It explains the shared server settings used by Plaspy, practical steps integrators and technicians commonly follow, and what to check before bringing the device online. The guidance focuses on the public values and workflow that enable the Lommy Capture 9B16 to report position and activity data into Plaspy powered systems.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page for a practical integration checklist and confirm any device specific commands or options with the manufacturer documentation before final deployment.

## Configuration Overview

This configuration prepares the Lommy Capture 9B16 to transmit GNSS positions and motion telemetry to Plaspy so assets become visible in your monitoring environment. The process aligns the device to Plaspy server endpoints, selects a transport method, and validates that the tracker can report under real operating conditions.

- Point the device to the Plaspy server endpoint so telemetry arrives in your Plaspy account.
- Choose the transport protocol supported by the device and Plaspy either UDP or TCP as required.
- Verify cellular connectivity and that the device can obtain GNSS fixes and report them.
- Confirm buffered reporting works by testing with intermittent connectivity or simulated power conditions.
- Validate visibility in Plaspy after the device sends its first reports so alerts and tracking are active.

## Plaspy Server Settings

- Server domain d.plaspy.com must be used as the primary host for tracker uplink configuration.
- Server IP 54.85.159.138 is the public address for the Plaspy endpoint.
- Port 8888 is the shared port used by Plaspy for all supported devices.
- Transport support for UDP or TCP is available and the device may be configured on either transport on port 8888.
- Plaspy automatically detects the tracker protocol so devices using standard tracker formats are recognized without per device protocol settings.

## Typical Requirements Before Setup

- Physical access to the Lommy Capture 9B16 and any vehicle wiring points needed for installation and testing.
- Active cellular service for the device SIM with data or SMS capability as supported by the unit.
- Access to the official Flextrack configuration method or software for the Lommy Capture 9B16.
- Knowledge of the device firmware version and vendor documented configuration commands or UI options.
- Basic GNSS visibility during testing or a test procedure to validate position fixes if installed inside a lamp housing.
- Backup plan to validate buffered reporting when the device experiences temporary loss of connectivity.

## How This Tracker Connects to Plaspy

The Lommy Capture 9B16 transmits GNSS fixes, motion events, and buffered telemetry to the shared Plaspy server endpoint and port. Plaspy receives packets on the same port for all devices and determines the correct protocol automatically so incoming reports are parsed and associated with the correct account and asset.

- The tracker sends periodic and event driven reports to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP as configured.
- Motion sensor triggers can cause adaptive reporting bursts that are forwarded to Plaspy for immediate visibility.
- When connectivity is intermittent, local flash storage buffers reports and forwards them when the tracker regains network access to the Plaspy endpoint.
- Alarms and location updates are consumed by Plaspy for real time monitoring, historical trails, and alerting workflows.
- Plaspy automatic protocol detection reduces the need to manually map tracker protocol types in the platform.

## Common Configuration Workflow

1. Access the official Flextrack configuration method or software for the Lommy Capture 9B16 as described in the manufacturer documentation.
2. Enter the Plaspy server host either as domain d.plaspy.com or as the IP address 54.85.159.138 in the device server settings.
3. Set the device port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP as the transport if the device requires selecting a transport protocol.
5. Apply or save the configuration in the device tool and confirm there are no syntax errors in the entries.
6. Restart the device if the manufacturer recommends a reboot to apply network settings.
7. Validate that the Lommy Capture reports to Plaspy by confirming the first GNSS fix or event appears in your Plaspy monitoring environment.

## Example Configuration Commands

The exact configuration commands and the method to send them depend on the Flextrack configuration tool or firmware for Lommy Capture 9B16. Manufacturers may provide SMS commands, USB tools, or web interfaces. Because the available methods vary by firmware and vendor toolset, refer to the official Flextrack documentation for command syntax and examples.

Note that when using commands or device UI to set server information you should use the Plaspy host d.plaspy.com or the IP 54.85.159.138 and set port 8888. Plaspy accepts either UDP or TCP and will automatically detect the tracker protocol upon receiving data.

## Configuration Notes

- Firmware differences can change available configuration commands and their exact syntax. Always confirm the command set for the Lommy Capture 9B16 firmware revision in use.
- Choose UDP for lower overhead in typical tracker uplinks or TCP where ordered delivery or session based behavior is required, depending on device support.
- SMS may be supported as a fallback method for configuring some parameters or for emergency reporting; check the manufacturer guide for SMS command formats.
- Local flash buffering will forward stored reports to d.plaspy.com on port 8888 once connectivity resumes; validate buffering by testing with simulated outages.
- Secure wiring and proper sealing of lamp housing penetrations is recommended to retain IP65 protection and long term reliability.

## Why Use Plaspy with This Configuration

Using the Lommy Capture 9B16 with Plaspy provides discreet, low maintenance visibility for trailers and other towed assets. Plaspy ingests GNSS positions and motion driven events from the Lommy Capture so fleet managers can monitor location, detect unauthorized movement, and analyze historical routes with minimal intervention on the device side.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and installation guidance consult the manufacturer at https://flextrack.dk since manufacturer specifications and setup methods can change over time.
