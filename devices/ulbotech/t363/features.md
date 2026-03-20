---
slug: /ulbotech/t363/features
id: t363-features
sidebar_label: Features
title: Ulbotech - T363 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Ulbotech T363 GPS tracker and how its WiFi OBDII GNSS and sensor capabilities integrate with Plaspy
keywords:
  - Ulbotech T363 features
  - Ulbotech T363 GPS tracker
  - T363 OBDII features
  - T363 WiFi hotspot
  - T363 GPS GLONASS
  - T363 immobilizer
  - T363 driver behavior
  - Plaspy compatible tracker
  - Ulbotech tracker capabilities
  - T363 fleet tracking
---

# Ulbotech - T363 Features

This page provides a public feature summary for the Ulbotech T363 and how its capabilities relate to use with Plaspy. It covers the primary, user facing functions that are relevant to fleet and vehicle monitoring through Plaspy and explains practical value without exposing sensitive configuration details.

Exact feature availability and behaviour can vary by firmware version, hardware revision, regional variant, and how the unit is installed. Where precise implementation matters for your deployment, review the manufacturer documentation and the device firmware notes before finalizing integration choices.

## Feature Overview

The Ulbotech T363 offers a combination of connectivity, positioning, vehicle diagnostics, and motion sensing intended for vehicle tracking and fleet oversight. These features help keep vehicles visible, provide diagnostic insight, and support driver behaviour analysis when the device is paired with a telematics platform such as Plaspy.

- Integrated cellular and WiFi capabilities that can provide in-vehicle internet and connectivity resilience
- WiFi bridging and hotspot functionality to extend local connectivity and reduce cellular usage when appropriate
- GNSS positioning that supports GPS and GLONASS for reliable location fixing
- OBDII and SAE J1939 diagnostics for collecting vehicle parameters and monitoring diagnostic trouble codes
- 3D acceleration sensing for motion detection and basic driving behaviour analysis
- Immobilizer output for remote engine cut off as an anti theft or recovery aid

## Core Features of Ulbotech - T363

- Integrated cellular and WiFi module enabling hotspot functionality for multiple devices
- WiFi bridging mode to connect to nearby wireless networks and conserve cellular data
- GNSS receiver with multi constellation support for dependable positioning
- High sensitivity antenna and assisted GNSS features to improve fix time in challenging installations
- OBDII and SAE J1939 compatibility for reporting vehicle parameters and DTC events
- Real time monitoring of common vehicle signals such as speed and engine metrics as reported by the vehicle bus
- 3D accelerometer for motion detection and event generation related to harsh driving patterns
- Dedicated immobilizer or engine cut off output for security and recovery workflows

## How These Features Work with Plaspy

Plaspy ingests telemetry and event data from compatible trackers to provide centralized location, diagnostics, and event visibility. The T363 can report positioning, vehicle diagnostics, and motion events into Plaspy so administrators and operators can monitor assets from a single dashboard.

- Location and historical trails appear on Plaspy maps allowing route review and geospatial oversight
- OBDII and SAE J1939 parameters reported by the device are surfaced in Plaspy as telemetry points for monitoring engine status and DTC events
- Motion and accelerometer events can generate alerts and be used for driver behaviour reporting inside Plaspy
- Immobilizer state or engine cut off events can be tracked as security events within Plaspy
- Plaspy automatically detects many tracker protocols and accepts device reporting to the platform server, simplifying setup and reducing manual protocol selection
- Connectivity options like WiFi bridging or hotspot use can improve data availability and help maintain consistent reporting to Plaspy in areas with variable cellular coverage

## Typical Use Cases

- Fleet management with continuous vehicle location and route history
- OBDII based vehicle health monitoring and early detection of diagnostic trouble codes
- Driver behaviour monitoring and coaching programs using accelerometer events
- Rental and insurance fleets where telemetry and remote immobilizer control add security
- Roadside assistance workflows supported by live diagnostics and location sharing
- Onboard passenger or operator connectivity via WiFi hotspot when required

## Feature Availability Notes

- Feature availability depends on firmware version and may change as Ulbotech releases updates
- Different hardware revisions or regional variants may alter cellular and WiFi behavior or supported bands
- OBDII and SAE J1939 data availability depends on the vehicle make, model, and the information exposed on the vehicle bus
- Installation method can affect GNSS performance; concealed installs may need antenna adjustments for best reception
- Verify which driving behaviour rules and accelerometer thresholds are enabled by default in device firmware
- Confirm local regulatory or carrier constraints that may affect hotspot or bridging functions

## Why Use Plaspy with These Features

Using the Ulbotech T363 together with Plaspy gives organizations a unified way to collect location, diagnostic, and motion data for operational decision making. Plaspy aggregates device reports into visual maps, alerts, and historical logs so teams can track vehicles, respond to diagnostic events, and analyze driving patterns without managing multiple point solutions.

To learn more about how Plaspy can work with compatible trackers, visit https://www.plaspy.com. For the most current and device specific technical details including firmware behaviour and manufacturer specifications, please consult Ulbotech documentation at http://www.ulbotech.com/ as features and implementations can change over time.
