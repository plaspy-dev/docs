---
slug: /meitrack/mt_80/protocol
id: mt_80-protocol
sidebar_label: Protocol
title: Meitrack - MT-80 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Meitrack MT 80 and how it communicates with Plaspy for reliable GPS reporting and device compatibility
keywords:
  - Meitrack MT 80 protocol
  - Meitrack MT 80 GPS protocol
  - MT 80 Plaspy compatibility
  - Meitrack tracker protocol
  - MT 80 tracking protocol
  - Meitrack GPS tracker communication
  - MT 80 GPRS protocol
  - Meitrack device protocol
  - Plaspy device compatibility
  - Meitrack location reporting
---

# Meitrack - MT-80 Protocol

This page describes the public protocol context for using the Meitrack MT-80 tracker with Plaspy. It focuses on how the device communicates in general terms and what to consider when pointing an MT-80 to Plaspy for position reporting, alerts, and basic telemetry. The content here is intended to help administrators and integrators understand the role of the tracker protocol when working with Plaspy without exposing sensitive implementation details.

The MT-80 is a compact personal tracker used for children, elderly individuals, lone workers, assets, and pets. It supports low power operation, SiRF III GNSS, quad band cellular, onboard accelerometer, local logging, and multiple reporting methods such as SMS and GPRS using the MEITRACK protocol. Plaspy uses a shared connection approach across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and how the manufacturer implements features.

## Protocol Overview

The protocol used by the MT-80 defines how the tracker identifies itself, reports position and status, and conveys alarms and telemetry to a remote server like Plaspy. In public terms this protocol enables the device to move raw device data into meaningful events and location updates that Plaspy can display and store.

- Provides device identification and session information so the server can associate reports with a specific MT-80 unit.
- Encodes location, timestamp, and status fields that Plaspy consumes for mapping and alerts.
- Carries alarm events such as SOS, geo fence, low battery, and speeding indicators for immediate action.
- Supports multiple reporting modes including periodic updates, distance based reporting, and on demand queries via SMS or GPRS.
- Works over standard mobile IP transport so the MT-80 can send data to a Plaspy endpoint for real time processing.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports at a single, shared endpoint and port and automatically determines the device protocol from the incoming connection and message context. That means when an MT-80 is configured to report to Plaspy, manual protocol selection in the platform is typically unnecessary if the tracker is correctly pointed to the Plaspy endpoint.

- Plaspy listens on the unified server endpoint d.plaspy.com and the public IP 54.85.159.138 for device reports.
- The platform uses port 8888 for device connections and all devices supported by Plaspy report to that same port.
- Plaspy can accept reports sent over the network endpoint without requiring users to select a specific protocol in most cases.
- Proper device configuration (server address, transport type, and device identifier) ensures the platform can match incoming messages to the MT-80 unit.
- If a device uses SMS fallback instead of GPRS, configure the device and Plaspy account according to your operational needs and manufacturer guidance.

## Transport and Connection Context

The MT-80 can deliver reports over mobile data using either UDP or TCP depending on device support and configuration. When integrating with Plaspy, point the tracker to Plaspy’s server address and use the platform port so the device can establish a connection and deliver position updates reliably.

- Devices may be configured to send GPRS reports to d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy accepts both UDP and TCP transports on port 8888; choose the transport the device supports and that suits network conditions.
- All Plaspy device traffic uses the same port 8888 which simplifies device setup across different tracker models.
- Ensure APN and GPRS settings on the MT-80 are correct so it can reach the Plaspy endpoint over the mobile network.
- Where supported, confirm whether the device will prefer SMS or GPRS for specific alarms or low connectivity scenarios.

## Protocol Compatibility Notes

- The MT-80 commonly reports using the MEITRACK protocol family for SMS/GPRS, but feature availability can depend on the firmware version loaded on the unit.
- Hardware revisions or regional variants may change which message types or fields are present in reports.
- Choosing UDP or TCP transport can affect delivery behavior in specific network environments; select what the device and network support.
- SMS reporting and GPRS reporting behave differently and may require separate configuration steps on the device and server side.
- Plaspy’s shared server settings simplify setup, but always validate the device identifier and reporting interval to match your tracking policy.
- For device specific commands, alarms, or firmware notes consult the manufacturer documentation to confirm current behavior.

## Why Protocol Understanding Matters

Knowing how the MT-80 communicates helps ensure successful setup, reliable reporting, and efficient troubleshooting when using Plaspy. Understanding the protocol and transport choices reduces setup time and avoids common errors that interrupt location updates or alarm delivery.

- Ensures you configure the correct server address and transport so the MT-80 reaches Plaspy.
- Helps interpret device behavior such as periodic reporting, SOS events, or missed updates.
- Guides troubleshooting of connectivity issues by checking APN, transport selection, and firmware versions.
- Supports long term maintenance planning by highlighting where firmware or hardware changes could affect integration.
- Aids in designing reporting intervals and battery usage trade offs for low power operation.

## Why Use Plaspy with This Protocol

Using the Meitrack MT-80 with Plaspy provides organizations and caregivers with accessible location visibility, alarm handling, and historical logs for small assets and personal safety applications. Plaspy’s central processing and unified endpoint model make it straightforward to receive MT-80 reports and turn them into actionable tracking information.

If you want to learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most up to date device specific protocol details, firmware notes, and manufacturer guidance verify information on the official Meitrack site https://www.meitrack.com/ since protocol support and firmware behavior can change over time.
